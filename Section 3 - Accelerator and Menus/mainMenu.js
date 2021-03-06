module.exports = [
  {
    label: "Electron",
    submenu: [
      { label: "Item 1" },
      { label: "Item 2", submenu: [{ label: "Sub Item 1" }] },
      { label: "Item 3" }
    ]
  },
  {
    label: "Actions",
    submenu: [
      { label: "Action 1" },
      { label: "Action 2", submenu: [{ label: "Sub Item 1" }] },
      {
        label: "My Greetings",
        click: () => {
          console.log("Hello there!");
        },
        accelerator: 'CommandOrControl+G'
      }
    ]
  }
];
