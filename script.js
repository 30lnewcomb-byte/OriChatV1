socket.on("admin", (data) => {
    let panel = document.createElement("div");
    panel.style.position = "fixed";
    panel.style.bottom = "20px";
    panel.style.right = "20px";
    panel.style.background = "black";
    panel.style.color = "lime";
    panel.style.padding = "10px";
    panel.style.border = "1px solid lime";
    panel.innerHTML = "<b>ADMIN PANEL</b><br>" + data.commands.join("<br>");
    document.body.appendChild(panel);
});
