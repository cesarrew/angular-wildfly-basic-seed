package example.example.rest.exception.mapper;

import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class IllegalArgumentExceptionMapper implements ExceptionMapper<IllegalArgumentException> {

    public Response toResponse(IllegalArgumentException iae) {
        return Response.status(Response.Status.BAD_REQUEST).entity("Error saving the register.").build();
    }
}