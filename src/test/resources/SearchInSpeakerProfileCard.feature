Feature: Search in Speaker Profile
  As a User
  I want to be able to search information about the speakers from each profile card
  So that I can easily find information about the speakers and i can view and compare all the speakers information without be forced to open multiple detailed profile pages

  Background:
    Given that i'm on the landing page
    When the page finishes loading

  Scenario Outline: Select a tag to search profile card information - Found information
    And i click in a search "<tag>" on top of the page
    Then  on profile card's "<speaker>" content adjusts automatically with the "<information>" found related with the tag selected

  Examples:
    | tag       | speaker | information |
    | Default   | Luis    | I am a full stack developer with 2 years of experience. Involving with java, javascript and php. |
    | Default   | Gabriel | I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#. |
    | Default   | Emanuel | I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming. |
    | Work      | Luis    | Web programmer in Yachay E.P.. Development of web applications, web services, web apps. & Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress). |
    | Work      | Emanuel | Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support |
    | Work      | Gabriel | Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics. |
    | Education | Emanuel | Mobile Computing in Polytechnic Institute of Leiria. & Computer Science in Polytechnic Institute of Leiria. |
    | Education | Luis    | Computational Systems Engineer in Universidad Técnica del Norte. |
    | Education | Gabriel | Mobile Computing in Polytechnic of Leiria. & Computer Science in Polytechnic of Leiria. & Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal. |
    | Relevant Projects | Emanuel | Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... & Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo... |
    | Relevant Projects | Luis    | Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies.... |
    | Relevant Projects | Gabriel | Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol... |
    | Web      | Luis    | Web programmer in Yachay E.P.. Development of web applications, web services, web apps. & Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress). |
    | Web      | Emanuel | Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo... |
    | Joomla   | Luis    | Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress). |
    | Android  | Luis    | Web programmer in Yachay E.P.. Development of web applications, web services, web apps. & Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies.... |

  Scenario Outline: Select a tag to search profile card information - Dont found information
  And i click in a search "<tag>" on top of the page
  Then profile card content of the "<speaker>" that dont have information and show a "<message>"

  Examples:
    | tag     | speaker | message |
    | Joomla  | Emanuel | No information found |
    | Joomla  | Gabriel | No information found |
    | Android | Emanuel | No information found |
    | Android | Gabriel | No information found |
    | Web     | Gabriel | No information found |

Scenario Outline: Write keyword to search profile card information - Found information
  And i write "<keyword>" in the search bar on top of the page
  Then the profile card content of the "<speaker>" adjusts automatically with the "<information>" found related to the words searched
Examples:
  | keyword   | speaker | information |
  | Ecuador   | Luis    | Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies.... |
  | game      | Gabriel | Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol... |
  | raspberry | Emanuel | Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w...|

Scenario Outline: Write keyword to search profile card information - Dont found information
  And i write "<keyword>" in the search bar on top of the page
  Then the profile card content of the "<speaker>" that dont have information for the keyword searched show a "<message>"

  Examples:
  | keyword   | speaker | message|
  | Ecuador   | Emanuel | No information found |
  | Ecuador   | Gabriel | No information found |
  | game      | Emanuel | No information found |
  | game      | Luis    | No information found |
  | raspberry | Gabriel | No information found |
  | raspberry | Luis    | No information found |
