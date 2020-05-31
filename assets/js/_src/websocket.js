
$(function() {
    let socket = new WebSocket("wss://uy8ai0rs9l.execute-api.us-east-1.amazonaws.com/sandbox-bastion");

    socket.onopen = function(e) {
        consle.log("[open] Connection established - listening for PS events.");
    };

    socket.onmessage = function(event) {
        console.log(`Got message ${event}`)
        $.notify('I got an event!')
    };

    socket.onclose = function(event) {
    if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
        // e.g. server process killed or network down
        // event.code is usually 1006 in this case
        console.log('[close] Connection died');
    }
    };

    socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
    };
}