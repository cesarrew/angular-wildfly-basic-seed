package example.example.exception;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

public class ExampleException extends WebApplicationException {
    
    public ExampleException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public ExampleException(String message, Status status, Throwable throwable) {
        super(message, throwable, Response.status(status).entity(message).build());
    }
}
