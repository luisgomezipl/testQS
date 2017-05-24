import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;
import java.util.logging.Level;
import java.util.logging.Logger;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

/**
 * Created by Luis Cisneros on 10/05/2017.
 */
public class StepdefsLandingPage {
    private static WebDriver driver;
    private static WebDriverWait wait;
    private static String url;

    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe");
        if (driver == null) {
            driver = Driver.INSTANCE.getDriver();
        }
        if (wait == null){
            wait = new WebDriverWait(driver, 5);
        }
    }

    @Given("^that i'm on the landing page$")
    public void thatIMOnTheLandingPage() throws Throwable {
        driver.get("http://loshermanos-profilecards-los-hermanos.7e14.starter-us-west-2.openshiftapps.com/");
    }

    @When("^the page finishes loading$")
    public void thePageFinishesLoading() throws Throwable {

        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//figure[1]/figcaption/h2")));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//figure[2]/figcaption/h2")));
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//figure[3]/figcaption/h2")));
    }

    @Then("^the profile card of the \"([^\"]*)\" must be presented with the name of the speaker \"([^\"]*)\"$")
    public void theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String speaker, String name) throws Throwable {
        WebElement webElement = null;
        if(speaker.toLowerCase().equals("luis")){
            webElement = driver.findElement(By.xpath("//figure[1]/figcaption/h2"));
        }else if(speaker.toLowerCase().equals("emanuel")){
            webElement = driver.findElement(By.xpath("//figure[2]/figcaption/h2"));
        }else if(speaker.toLowerCase().equals("gabriel")){
            webElement = driver.findElement(By.xpath("//figure[3]/figcaption/h2"));
        }
        wait.until(ExpectedConditions.textToBePresentInElement(webElement, name));
    }

    @Then("^the profile card of the \"([^\"]*)\" must be presented with the photo of speaker \"([^\"]*)\"$")
    public void theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String speaker, String photo) throws Throwable {
        wait.until(ExpectedConditions.presenceOfElementLocated(
                        By.xpath("//figure[@id='"+speaker.toLowerCase()+"-info']/figcaption/img[@src='../images/"+photo+"']")
                ));
    }

    @Then("^the profile card of the \"([^\"]*)\" must be presented with the \"([^\"]*)\"$")
    public void theProfileCardOfTheMustBePresentedWithThe(String speaker, String title) throws Throwable {
        wait.until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.xpath("//figure[@id='"+speaker.toLowerCase()+"-info']/figcaption/h2[2]/span"))
                , title
            ));
    }

    @Then("^the profile card of the \"([^\"]*)\" must be presented with the short bio like \"([^\"]*)\"$")
    public void theProfileCardOfTheMustBePresentedWithTheShortBioLike(String speaker, String shortBio) throws Throwable {
        wait.until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.xpath("//div[@id='"+speaker.toLowerCase()+"']/p"))
                , shortBio
        ));
    }

    @Then("^the profile card of the \"([^\"]*)\" must be presented an \"([^\"]*)\" redirecting to \"([^\"]*)\"$")
    public void theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String speaker, String socialImage, String link) throws Throwable {
        wait.until(
            ExpectedConditions.presenceOfElementLocated(
                    By.xpath("//figure[@id='"+speaker.toLowerCase()+"-info']/figcaption/center/a[@href='"+link+"']/img[@src='../images/"+socialImage+"']")
            ));
    }

    @Then("^the profile card of the \"([^\"]*)\" must not be presented an \"([^\"]*)\" redirecting to \"([^\"]*)\"$")
    public void theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String speaker, String socialImage, String link) throws Throwable {
        boolean exists = driver.findElements(
                By.xpath("//figure[@id='"+speaker.toLowerCase()+"-info']/figcaption/center/a[@href='"+link+"']/img[@src='../images/"+socialImage+"']"))
                    .size() != 0;
        assertFalse(exists);
    }

    @And("^I press \"([^\"]*)\" of \"([^\"]*)\"$")
    public void iPressOf(String socialNetwork, String speaker) throws Throwable {
        url = driver.findElement(By.xpath("//figure[@id='"+speaker.toLowerCase()+"-info']/figcaption/center/a[@class='social "+socialNetwork.toLowerCase()+"']")).getAttribute("href");
    }

    /*@Then("^Open new tab and the title of page openned is \"([^\"]*)\"$")
    public void openNewTabAndTheTitleOfPageOpennedIs(String value) throws Throwable {
        driver.get(url);
        waitForSocialElement(value.toLowerCase());
        if(value.toLowerCase().contains("linkedin"))
            assertTrue(driver.getTitle().toLowerCase().contains(value.toLowerCase()));
        else
            assertEquals(value, driver.getTitle());
    }

    private void waitForSocialElement(String socialValue) {
        String xPath = "";
        if(socialValue.toLowerCase().contains("linkedin")){
            xPath = "//button[@type='submit']";
        }else if(socialValue.toLowerCase().contains("facebook")){
            xPath = "//div[@id='blueBarDOMInspector']/div/div/div/div/a/i";
        }else if(socialValue.toLowerCase().contains("twitter")){
            xPath = "//a[@id='signin-link']/small";
        }
        new WebDriverWait(driver, 30).until(ExpectedConditions.presenceOfElementLocated(By.xpath(xPath)));
    }*/

    @And("^I press more info button of \"([^\"]*)\"$")
    public void iPressMoreInfoButtonOf(String speaker) throws Throwable {
        driver.findElement(By.cssSelector("#"+speaker.toLowerCase()+"-info > figcaption > center > a.info")).click();
        wait.until(
                ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@id='header-text']/h1"))
        );
    }

    @Then("^the detail page must be presented with the \"([^\"]*)\"$")
    public void theDetailPageMustBePresentedWithThe(String title) throws Throwable {
        assertEquals(title, driver.getTitle());
    }
}
