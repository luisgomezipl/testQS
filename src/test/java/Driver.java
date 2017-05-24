import org.openqa.selenium.WebDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;

/**
 * Created by Luis Cisneros on 12/05/2017.
 */
public enum Driver {
    INSTANCE;

    private WebDriver driver;

    private Driver(){
        driver = new HtmlUnitDriver(true) ;
        //driver = new ChromeDriver();
        //driver = new PhantomJSDriver();
    }

    public WebDriver getDriver() {
        return driver;
    }

    public void setDriver(WebDriver driver) {
        this.driver = driver;
    }
}
