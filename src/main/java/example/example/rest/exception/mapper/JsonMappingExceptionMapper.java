package example.example.rest.exception.mapper;

import com.fasterxml.jackson.databind.JsonMappingException;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;
import javax.ws.rs.ext.Provider;

@Provider
public class JsonMappingExceptionMapper implements ExceptionMapper<JsonMappingException> {

    public Response toResponse(JsonMappingException jme) {
        return Response.status(Response.Status.BAD_REQUEST).entity("Error saving the register.").build();
    }
}