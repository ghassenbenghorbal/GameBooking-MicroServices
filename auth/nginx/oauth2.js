function introspectAccessToken(r) {
    r.return(204);
    // let userType
    // if(r.headers.get('User-Type') == 'user'){
    //     userType = 'user'
    // }
    // else if(r.headers.get('User-Type') == 'admin'){
    //     userType = 'admin'
    // }
    // else{
    //     r.return(401);
    //     return;
    // }
    // r.subrequest("/api/auth/"+userType,
    //     function(reply) {
    //         if (reply.status == 200) {
    //             var response = JSON.parse(reply.responseBody);
    //             if (response.active == true) {
    //                 r.return(204); // Token is valid, return success code
    //             } else {
    //                 r.return(403); // Token is invalid, return forbidden code
    //             }
    //         } else {
    //             r.return(401); // Unexpected response, return 'auth required'
    //         }
    //     }
    // );
}

export default { introspectAccessToken }