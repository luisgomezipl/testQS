import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;


/**
 * Created by Luis Cisneros on 11/05/2017.
 */
public class StepdefsDetailsPage {

    private static String baseUrl = "http://loshermanos-profilecards-los-hermanos.7e14.starter-us-west-2.openshiftapps.com";
    private static WebDriver driver;

    static {
        Logger.getLogger("").setLevel(Level.OFF);
        System.setProperty("webdriver.gecko.driver", "drivers\\geckodriver.exe");
        System.setProperty("webdriver.edge.driver", "drivers\\MicrosoftWebDriver.exe");
        System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
        System.setProperty("phantomjs.binary.path", "drivers\\phantomjs.exe"); //
        if (driver == null) {
            driver = Driver.INSTANCE.getDriver();
        }
    }

    @Given("^I am the profile details page of \"([^\"]*)\"$")
    public void iAmTheProfileDetailsPageOf(String speaker) throws Throwable {
        if(speaker.toLowerCase().equals("luis")){
            driver.get(baseUrl + "/personal.html?id=0");
        }else if(speaker.toLowerCase().equals("emanuel")){
            driver.get(baseUrl + "/personal.html?id=1");
        }else if(speaker.toLowerCase().equals("gabriel")){
            driver.get(baseUrl + "/personal.html?id=2");
        }
    }

    @When("^The page is loaded$")
    public void thePageIsLoaded() throws Throwable {
        new WebDriverWait(driver, 4).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("h1.responsive-headline")));
    }

    @Then("^the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact$")
    public void theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact() throws Throwable {
        presentXpathLinkMenuWithText("Home");
        presentXpathLinkMenuWithText("Return");
        presentXpathLinkMenuWithText("About");
        presentXpathLinkMenuWithText("Resume");
        presentXpathLinkMenuWithText("Projects");
        presentXpathLinkMenuWithText("Contact");
    }

    public void presentXpathLinkMenuWithText(String text){
        new WebDriverWait(driver, 4).until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'"+text+"')]")));
    }

    @Then("^the page must be display the photo content in \"([^\"]*)\"$")
    public void thePageMustBeDisplayThePhotoConctentIn(String photo) throws Throwable {
        new WebDriverWait(driver, 4)
            .until(ExpectedConditions.presenceOfElementLocated(
                    By.xpath("//section[@id='about']/div/div/img[@src='../images/"+photo+"']")
            ));
    }

    @Then("^the page must be display the \"([^\"]*)\" of the speaker selected$")
    public void thePageMustBeDisplayTheOfTheSpeakerSelected(String name) throws Throwable {
        new WebDriverWait(driver, 4).until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.cssSelector("h1.responsive-headline"))
                , name
        ));
    }

    @Then("^the page must be display the title \"([^\"]*)\" of the speaker selected$")
    public void thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String title) throws Throwable {
        new WebDriverWait(driver, 4).until(ExpectedConditions.textToBePresentInElement(
                driver.findElement(By.xpath("//div[@id='header-text']/h3"))
                , title
        ));
    }

    @Then("^the page must be presented with an icon of the \"([^\"]*)\" redirecting to \"([^\"]*)\"$")
    public void thePageMustBePresentedWithAnIconOfTheRedirectingTo(String socialNetwork, String link) throws Throwable {
        new WebDriverWait(driver, 4).until(
                ExpectedConditions.presenceOfElementLocated(
                        By.xpath("//div[@id='header-text']/ul/li/a[@class='"+socialNetwork+"'][@href='"+link+"']")
                ));
    }

    @Then("^the page must be display a list of \"([^\"]*)\" with the \"([^\"]*)\" and \"([^\"]*)\"$")
    public void thePageMustBeDisplayAListOfWithTheAnd(String workExperience , String job, String activities) throws Throwable {
        resumeXpathValidator("work",workExperience);
        resumeXpathValidator("work",job);
        resumeXpathValidator("work",activities);
    }

    @Then("^the page must be display a list of personal education with \"([^\"]*)\" , \"([^\"]*)\" and \"([^\"]*)\"$")
    public void thePageMustBeDisplayAListOfPersonalEducationWithAnd(String title, String institution, String level) throws Throwable {
        resumeXpathValidator("education", title);
        resumeXpathValidator("education", institution);
        resumeXpathValidator("education", level);
    }

    @Then("^the page must be display a list of projects with \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void thePageMustBeDisplayAListOfProjectsWithAnd(String projectTitle, String place, String description) throws Throwable {
        resumeXpathValidator("portfolio", projectTitle);
        resumeXpathValidator("portfolio", place);
        resumeXpathValidator("portfolio", description);
    }

    @Then("^the page must be display a list of \"([^\"]*)\" with the \"([^\"]*)\"$")
    public void thePageMustBeDisplayAListOfWithThe(String certification, String description) throws Throwable {
        resumeXpathValidator("certifications",certification);
        resumeXpathValidator("certifications",description);
    }

    public void resumeXpathValidator(String infoType, String value){
        //XPATH => .//*[@id='work-info']/div/div/h3[contains(text(),'Nemecis Solutions')]
        new WebDriverWait(driver, 4).until(
                ExpectedConditions.presenceOfElementLocated(
                        By.xpath("//*[@id='"+infoType+"-info']//*[contains(text(),'"+value+"')]")
                ));
    }

}
