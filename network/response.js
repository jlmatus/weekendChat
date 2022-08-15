exports.success = function(req, res) {
    res.status(200).send('success');
}



exports.error = function(req, res, message, status) {
    res.status(status || 5000).send({
        error: message,
        body: ''
    });
}