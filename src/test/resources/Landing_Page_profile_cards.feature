Feature: Present Landing Page with profile cards	
  As a User
  I want to able to see the profile cards of each speaker containing their name, title, most revelant project, photo and social network links(twitter, linkedIn, facebook).
  So that i get an overview of who are the speakers in the conference.

Background:
  Given that i'm on the landing page
  When the page finishes loading

  Scenario Outline: Landing Page - View Speaker Names
    Then the profile card of the "<speaker>" must be presented with the name of the speaker "<name>"

    Examples:
      | speaker |      name     |
      | Gabriel | Gabriel Silva |
      | Emanuel | Emanuel Silva |
      | Luis    | Luis Alberto Cisneros Gómez    |

  Scenario Outline: Landing Page - View Speaker Photo
    Then the profile card of the "<speaker>" must be presented with the photo of speaker "<photo>"

    Examples:
      | speaker |   photo     |
      | Gabriel | gabriel.jpg |
      | Emanuel | emanuel.jpg |
      | Luis    | luis.jpg    |

  Scenario Outline: Open Landing Page - View Speaker Title
    Then the profile card of the "<speaker>" must be presented with the "<title>"

    Examples:
      | speaker |    title     |
      | Gabriel | Software engineer |
      | Emanuel | Computer Engineer |
      | Luis    | Computational Systems Engineer |

  Scenario Outline: Open Landing Page - View Speaker short bio
    Then the profile card of the "<speaker>" must be presented with the short bio like "<short bio>"

    Examples:
      | speaker | short bio |
      | Gabriel | I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#. |
      | Emanuel | I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming. |
      | Luis    | I am a full stack developer with 2 years of experience. Involving with java, javascript and php.|


  Scenario Outline: Landing Page - View Speaker Enabled Social Networks
    Then the profile card of the "<speaker>" must be presented an "<social network image>" redirecting to "<link>"

    Examples:
      | speaker | social network image | link    |
      | Emanuel | fb.png      | https://www.facebook.com/emanuel.silva.146 |
      | Luis    | in.png      | https://www.linkedin.com/in/luiscisnerosg/ |
      | Luis    | fb.png      | https://www.facebook.com/tiko.Luis.Cisneros |
      | Luis    | twitter.png | https://twitter.com/TikoCisneros|

  Scenario Outline: Landing Page - View Speaker Not Enabled Social Networks
    Then the profile card of the "<speaker>" must not be presented an "<social network image>" redirecting to "<link>"

    Examples:
      | speaker    | social network image  | link    |
      | Emanuel    | in.png      | https://www.linkedin.com/in/emanuel.silva/ |
      | Emanuel    | twitter.png | https://twitter.com/emanuelsilva|
      | Gabriel    | in.png      | https://www.linkedin.com/in/gabriel/ |
      | Gabriel    | fb.png      | https://www.facebook.com/gabriel.silva |
      | Gabriel    | twitter.png | https://twitter.com/gabrielsilva|

#  Scenario Outline: Landing Page - View Speaker Redirect Speaker Social Networks Links
#    And I press "<social network>" of "<speaker>"
#    Then Open new tab and the title of page openned is "<value>"
#
#    Examples:
#      | speaker | social network | value |
#      | Emanuel | facebook       | Emanuel Silva \| Facebook |
#      | Luis    | linkedIn       | LinkedIn |
#      | Luis    | facebook       | Luis Alberto Cisneros Gómez \| Facebook |
#      | Luis    | twitter        | Luis Cisneros (7!k#) (@TikoCisneros) \| Twitter |

  Scenario Outline: Open Detail Page - View Speaker Title
    And I press more info button of "<speaker>"
    Then the detail page must be presented with the "<title>"

    Examples:
      | speaker |    title     |
      | Gabriel | Gabriel Silva - Details Page  |
      | Emanuel | Emanuel Silva - Details Page |
      | Luis    | Luis Alberto Cisneros Gómez - Details Page |