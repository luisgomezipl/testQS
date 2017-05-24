Feature: Present Speaker Detail Page
 As a  User
 I want   to able to see the detailed information about one specific speaker (photo, working experience, education and training, projects, certifications and awards)
 So that  i may know the projects and accomplishments of one specific speaker


  Scenario Outline: Speaker Detail Page - Menu and Back Button
   Given I am the profile details page of "<speaker>"
   When The page is loaded
   Then the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact

  Examples:
    |  speaker  |
    |  Luis     |
    |  Gabriel  |
    |  Emanuel  |

  Scenario Outline: Speaker Detail Page - Check speakers photo
    Given I am the profile details page of "<speaker>"
    When The page is loaded
    Then the page must be display the photo content in "<photo>"

  Examples:
    | speaker |   photo     |
    | Gabriel | gabriel.jpg |
    | Emanuel | emanuel.jpg |
    | Luis    | luis.jpg    |

  Scenario Outline: Speaker Detail Page - Check speakers name
    Given I am the profile details page of "<speaker>"
    When The page is loaded
    Then the page must be display the "<name>" of the speaker selected

  Examples:
    |  speaker  | name    |
    |  Luis     | Luis Alberto Cisneros Gómez |
    |  Gabriel  | Gabriel Silva |
    |  Emanuel  | Emanuel Silva |

  Scenario Outline: Speaker Detail Page - Check speakers title
    Given I am the profile details page of "<speaker>"
    When The page is loaded
    Then the page must be display the title "<title>" of the speaker selected

  Examples:
    |  speaker  | title                          |
    |  Luis     | Computational Systems Engineer |
    |  Gabriel  | Software engineer              |
    |  Emanuel  | Computer Engineer              |

  Scenario Outline: Speaker Detail Page - Check speakers social networks
    Given I am the profile details page of "<speaker>"
    When The page is loaded
    Then the page must be presented with an icon of the "<social network>" redirecting to "<link>"

  Examples:
   | speaker | social network | link                                       |
   | Emanuel | facebook       | https://www.facebook.com/emanuel.silva.146 |
   | Luis    | linkedin       | https://www.linkedin.com/in/luiscisnerosg/ |
   | Luis    | facebook       | https://www.facebook.com/tiko.Luis.Cisneros|
   | Luis    | twitter        | https://twitter.com/TikoCisneros           |

Scenario Outline: Speaker Detail Page - Check speakers work experience
  Given I am the profile details page of "<speaker>"
  When The page is loaded
  Then the page must be display a list of "<work experience>" with the "<job>" and "<activities>"

Examples:
 | speaker | work experience                     | job                    | activities                                               |
 | Gabriel | Polytechnic of Leiria               | Guest assistant        | Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics. |
 | Emanuel | Internship at the College Conciliar de Maria Immaculada - Leiria | Intern  | Maintenance and expansion of existing computer network in college, Technical support |
 | Luis    | Yachay E.P.                         | Web programmer         |Development of web applications, web services, web apps.  |
 | Luis    | Nemecis Solutions                   | Website developer      |Development of static and dynamic websites (html, joomla, wordpress). |

Scenario Outline: Speaker Detail Page - Check speakers education
  Given I am the profile details page of "<speaker>"
  When The page is loaded
  Then the page must be display a list of personal education with "<title>" , "<institution>" and "<level>"

Examples:
 | speaker |   title                           | institution                                                  |  level          |
 | Gabriel | Course of science and technology  |  Escola Secundária Raul Proença, Caldas da Rainha, Portugal  |High School      |
 | Gabriel | Mobile Computing                  |  Polytechnic of Leiria                                       |Master Degree    |
 | Gabriel | Computer Science                  |  Polytechnic of Leiria                                       |Bachelor Degree  |
 | Emanuel | Computer Science                  |  Polytechnic Institute of Leiria                             |Bachelor Degree |
 | Emanuel | Mobile Computing                  |  Polytechnic Institute of Leiria                             |Master Degree    |
 | Luis    | Computational Systems Engineer    |  Universidad Técnica del Norte                               |Bachelor        |

Scenario Outline: Speaker Detail Page - Check speakers projects
  Given I am the profile details page of "<speaker>"
  When The page is loaded
  Then the page must be display a list of projects with "<title>", "<place>" and "<description>"

Examples:
 | speaker |           title               |       place            |                   description                                        |
 | Gabriel | Evolution of Virtual Creatures| Polytechnic of Leiria  |The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine.|
 | Emanuel | Silent Television             | Polytechnic Institute of Leiria  |This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices.|
 | Emanuel | Smart Garden                  | Polytechnic Institute of Leiria  |This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time.|
 | Luis    | Ibarra Tourism App            | Ibarra - Ecuador       | Android Tourism App builded with Apache Cordova and web technologies.|

Scenario Outline: Speaker Detail Page - Check speakers certifications
  Given I am the profile details page of "<speaker>"
  When The page is loaded
  Then the page must be display a list of "<certification>" with the "<description>"

Examples:
 | speaker |   certification                                     | description                                            |
 | Gabriel |   Workshop IBM: Big Data                            | Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.|
 | Emanuel |   Workshop Cloud Computing                          | Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.|
 | Luis    | Cisco IT ESSENTIALS BASIC                           | Universidad Técnica del Norte, Academia CISCO / Enero de 2013 |
 | Luis    | Certificate of Completion: PHP Course               | SoloLearn Licencia 1059-593722 / February 2016          |
 | Luis    | Certificate of Completion: JavaScript Fundamentals  | SoloLearn Licencia 1024-593722 / February 2016          |
 | Luis    | Certificate of Completion: SQL Fundamentals         | SoloLearn Licencia 1060-593722 / February 2016          |
 | Luis    | Certificate of Completion: HTML Fundamentals        | SoloLearn Licencia 1014-593722 / February 2016          |
 | Luis    | Certificate of Completion: CSS Fundamentals         | SoloLearn Licencia 1023-593722 / February 2016          |
 | Luis    | Certificate of Completion: Java Course              | SoloLearn Licencia 1068-593722 / February 2016          |
