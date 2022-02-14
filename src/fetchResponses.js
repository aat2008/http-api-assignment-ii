const respond = (request, response, status, content, type) => {
    response.writeHead(status, { 'Content-Type': type });
    response.write(content);
    response.end();
};

const getUsers = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found.',
        id: 'notFound'
    };

    //otherwise
    const jsonString = JSON.stringify(responseJSON);
    return respond(request, response, 200, jsonString, 'application/json');
}


const notReal = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found.',
        id: 'notFound'
    };

    //otherwise
    const jsonString = JSON.stringify(responseJSON);
    return respond(request, response, 404, jsonString, 'application/json');
}

const notFound = (request, response) => {
    const responseJSON = {
        message: 'The page you are looking for was not found.',
        id: 'notFound'
    };

    //otherwise
    const jsonString = JSON.stringify(responseJSON);
    return respond(request, response, 404, jsonString, 'application/json');
}

module.exports = {
    getUsers,
    notReal,
    notFound,
}