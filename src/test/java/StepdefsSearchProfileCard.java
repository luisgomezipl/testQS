import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Created by Luis Cisneros on 12/05/2017.
 */
public class StepdefsSearchProfileCard {

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

    @And("^i click in a search \"([^\"]*)\" on top of the page$")
    public void iClickInASearchOnTopOfThePage(String tag) throws Throwable {
        driver.findElement(By.xpath("//a[contains(text(),'"+tag+"')]")).click();
    }

    @Then("^on profile card's \"([^\"]*)\" content adjusts automatically with the \"([^\"]*)\" found related with the tag selected$")
    public void onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String speaker, String information) throws Throwable {
        analizeSpeakerProfileCardContent(speaker, information);
    }

    @Then("^profile card content of the \"([^\"]*)\" that dont have information and show a \"([^\"]*)\"$")
    public void profileCardContentOfTheThatDontHaveInformationAndShowA(String speaker, String message) throws Throwable {
        analizeSpeakerProfileCardContent(speaker, message);
    }

    @And("^i write \"([^\"]*)\" in the search bar on top of the page$")
    public void iWriteInTheSearchBarOnTopOfThePage(String keyword) throws Throwable {
        driver.findElement(By.id("seach-bar")).click();
        driver.findElement(By.id("seach-bar")).clear();
        driver.findElement(By.id("seach-bar")).sendKeys(keyword);
        driver.findElement(By.id("btn")).click();
    }

    @Then("^the profile card content of the \"([^\"]*)\" adjusts automatically with the \"([^\"]*)\" found related to the words searched$")
    public void theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String speaker, String information) throws Throwable {
        analizeSpeakerProfileCardContent(speaker, information);
    }

    @Then("^the profile card content of the \"([^\"]*)\" that dont have information for the keyword searched show a \"([^\"]*)\"$")
    public void theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String speaker, String message) throws Throwable {
        analizeSpeakerProfileCardContent(speaker, message);
    }

    private void analizeSpeakerProfileCardContent(String speaker, String information) {
        if(information.contains("&")){
            String [] content = information.split("&");
            for (int i = 0; i < content.length; i++) {
                validateSpeakerProfileCardContent(speaker, content[i].trim());
            }
        }else
            validateSpeakerProfileCardContent(speaker, information);
    }

    private void validateSpeakerProfileCardContent(String speaker, String information) {
        new WebDriverWait(driver, 4).until(
                ExpectedConditions.presenceOfElementLocated(
                        By.xpath("//div[@id='"+speaker.toLowerCase()+"']/p[contains(text(),'"+information+"')]")
                ));
    }
}
