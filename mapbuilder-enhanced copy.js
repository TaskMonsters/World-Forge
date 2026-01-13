// Enhanced MapBuilder methods to replace in app.js

// Add these properties to MapBuilder object:
draggedNode: null,
dragOffsetX: 0,
dragOffsetY: 0,

// Replace handleMouseDown:
handleMouseDown(e) {
  const rect = this.canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Check if clicking on an existing node
  const clickedNode = this.getNodeAtPosition(x, y);
  
  if (clickedNode) {
    if (e.detail === 2) { // Double click
      this.editNodeLabel(clickedNode);
      return;
    } else if (this.tool === 'pan') {
      // Start dragging node
      this.draggedNode = clickedNode;
      this.dragOffsetX = x - clickedNode.x;
      this.dragOffsetY = y - clickedNode.y;
      this.canvas.style.cursor = 'grabbing';
      return;
    }
  }
  
  this.isDrawing = true;
  this.lastX = x;
  this.lastY = y;
  
  if (this.tool === 'icon' && this.selectedIcon) {
    this.showIconPicker(x, y);
  }
},

// Replace handleMouseMove:
handleMouseMove(e) {
  const rect = this.canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  // Handle node dragging
  if (this.draggedNode) {
    this.draggedNode.x = x - this.dragOffsetX;
    this.draggedNode.y = y - this.dragOffsetY;
    AppState.save();
    this.render();
    return;
  }
  
  if (!this.isDrawing) return;
  
  if (this.tool === 'draw') {
    this.drawLine(this.lastX, this.lastY, x, y);
    this.saveDrawing(this.lastX, this.lastY, x, y);
  }
  
  this.lastX = x;
  this.lastY = y;
},

// Replace handleMouseUp:
handleMouseUp() {
  this.isDrawing = false;
  if (this.draggedNode) {
    this.draggedNode = null;
    const cursor = this.tool === 'draw' ? 'crosshair' : this.tool === 'icon' ? 'pointer' : 'grab';
    this.canvas.style.cursor = cursor;
  }
},

// Add new methods:
getNodeAtPosition(x, y) {
  if (!AppState.currentWorld.mapNodes) return null;
  
  for (let i = AppState.currentWorld.mapNodes.length - 1; i >= 0; i--) {
    const node = AppState.currentWorld.mapNodes[i];
    const distance = Math.sqrt((x - node.x) ** 2 + (y - node.y) ** 2);
    if (distance < 30) {
      return node;
    }
  }
  return null;
},

editNodeLabel(node) {
  Modal.show(
    'Edit Location',
    '<div class="form-group"><label class="form-label">Location Name</label><input type="text" class="form-input" id="nodeLabel" value="' + node.label + '" placeholder="Enter location name"></div><div class="form-group"><label class="form-label">Icon</label><input type="text" class="form-input" id="nodeIcon" value="' + node.icon + '" placeholder="Enter emoji" maxlength="2"></div>',
    '<button class="btn btn-danger" onclick="MapBuilder.deleteNode(\'' + node.id + '\')">Delete</button><button class="btn btn-secondary" onclick="Modal.close()">Cancel</button><button class="btn btn-primary" onclick="MapBuilder.saveNodeEdit(\'' + node.id + '\')">Save</button>'
  );
},

saveNodeEdit(nodeId) {
  const node = AppState.currentWorld.mapNodes.find(n => n.id === nodeId);
  if (!node) return;
  
  const label = document.getElementById('nodeLabel').value;
  const icon = document.getElementById('nodeIcon').value;
  
  if (!label) {
    alert('Please enter a location name');
    return;
  }
  
  node.label = label;
  if (icon) node.icon = icon;
  
  AppState.save();
  Modal.close();
  this.render();
},

deleteNode(nodeId) {
  if (confirm('Delete this location from the map?')) {
    AppState.currentWorld.mapNodes = AppState.currentWorld.mapNodes.filter(n => n.id !== nodeId);
    AppState.save();
    Modal.close();
    this.render();
  }
},
