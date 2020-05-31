
$(document).ready(function() {
    let socket = new WebSocket("wss://uy8ai0rs9l.execute-api.us-east-1.amazonaws.com/sandbox-bastion");

    socket.onopen = function (e) {
        console.log("[open] Connection established - listening for PS events.");
    };

    socket.onmessage = function (event) {
        data = JSON.parse(event.data);
        event = data.event;
        action = "Unknown";
        if (event === 'PutParameter') {
            action = 'Updated';
        } else if (event === 'DeleteParameter') {
            action = 'Deleted';
        }


        console.log(event);
        $.notify({
            title: 'Figgy Sandbox Change Detected!',
            message: `<b>Parameter:</b> ${data.parameter}<br/><b>Action:</b> ${action}<br/><b>Changed By:</b> ${data.user}`,
            target: 'https://google.com'
        },{
            type: 'pastel-warning',

            delay: 5000,
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
        });
    };

    socket.onclose = function (event) {
        if (event.wasClean) {
            console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
            console.log('[close] Connection died');
        }
    };

    socket.onerror = function (error) {
        console.log(`[error] ${error.message}`);
    };
});

