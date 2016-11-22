package example.example.configuration;

import javax.servlet.ServletContext;
import org.ocpsoft.rewrite.annotation.RewriteConfiguration;
import org.ocpsoft.rewrite.config.Configuration;
import org.ocpsoft.rewrite.config.ConfigurationBuilder;
import org.ocpsoft.rewrite.config.Direction;
import org.ocpsoft.rewrite.servlet.config.Forward;
import org.ocpsoft.rewrite.servlet.config.HttpConfigurationProvider;
import org.ocpsoft.rewrite.servlet.config.Path;
import org.ocpsoft.rewrite.servlet.config.Resource;
import org.ocpsoft.rewrite.servlet.config.ServletMapping;

@RewriteConfiguration
public class PushStateConfigurationProvider extends HttpConfigurationProvider {

    @Override
    public Configuration getConfiguration(final ServletContext servletContext) {
        return ConfigurationBuilder
                .begin()
                .addRule()
                .when(Direction
                        .isInbound()
                        .and(Path.matches("/{path}"))
                        .andNot(Resource.exists("/{path}"))
                        .andNot(ServletMapping.includes("/{path}")))
                .perform(Forward.to("/index.html"))
                .where("path")
                .matches(".*");
    }

    @Override
    public int priority() {
        return 10;
    }
}
