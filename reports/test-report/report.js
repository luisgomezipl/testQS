$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Landing_Page_profile_cards.feature");
formatter.feature({
  "line": 1,
  "name": "Present Landing Page with profile cards",
  "description": "As a User\r\nI want to able to see the profile cards of each speaker containing their name, title, most revelant project, photo and social network links(twitter, linkedIn, facebook).\r\nSo that i get an overview of who are the speakers in the conference.",
  "id": "present-landing-page-with-profile-cards",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the name of the speaker \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;",
  "rows": [
    {
      "cells": [
        "speaker",
        "name"
      ],
      "line": 14,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Gabriel Silva"
      ],
      "line": 15,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Emanuel Silva"
      ],
      "line": 16,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;3"
    },
    {
      "cells": [
        "Luis",
        "Luis Alberto Cisneros Gómez"
      ],
      "line": 17,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 959982160,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 2229160806,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 826935359,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"Gabriel\" must be presented with the name of the speaker \"Gabriel Silva\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "Gabriel Silva",
      "offset": 82
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String,String)"
});
formatter.result({
  "duration": 710879846,
  "status": "passed"
});
formatter.after({
  "duration": 543486,
  "status": "passed"
});
formatter.before({
  "duration": 10993815,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 77802487,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 707406200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"Emanuel\" must be presented with the name of the speaker \"Emanuel Silva\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "Emanuel Silva",
      "offset": 82
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String,String)"
});
formatter.result({
  "duration": 54321088,
  "status": "passed"
});
formatter.after({
  "duration": 365746,
  "status": "passed"
});
formatter.before({
  "duration": 12203946,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 74497718,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 707083840,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Landing Page - View Speaker Names",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-names;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "the profile card of the \"Luis\" must be presented with the name of the speaker \"Luis Alberto Cisneros Gómez\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "Luis Alberto Cisneros Gómez",
      "offset": 79
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheNameOfTheSpeaker(String,String)"
});
formatter.result({
  "duration": 52622052,
  "status": "passed"
});
formatter.after({
  "duration": 211796,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the photo of speaker \"\u003cphoto\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;",
  "rows": [
    {
      "cells": [
        "speaker",
        "photo"
      ],
      "line": 23,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;1"
    },
    {
      "cells": [
        "Gabriel",
        "gabriel.jpg"
      ],
      "line": 24,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;2"
    },
    {
      "cells": [
        "Emanuel",
        "emanuel.jpg"
      ],
      "line": 25,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;3"
    },
    {
      "cells": [
        "Luis",
        "luis.jpg"
      ],
      "line": 26,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 71289517,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 53317155,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706061713,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"Gabriel\" must be presented with the photo of speaker \"gabriel.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "gabriel.jpg",
      "offset": 79
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String,String)"
});
formatter.result({
  "duration": 3646722,
  "status": "passed"
});
formatter.after({
  "duration": 264979,
  "status": "passed"
});
formatter.before({
  "duration": 6860521,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 55639916,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 711889377,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"Emanuel\" must be presented with the photo of speaker \"emanuel.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "emanuel.jpg",
      "offset": 79
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String,String)"
});
formatter.result({
  "duration": 6526499,
  "status": "passed"
});
formatter.after({
  "duration": 2314364,
  "status": "passed"
});
formatter.before({
  "duration": 12076122,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 69853128,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705667977,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Landing Page - View Speaker Photo",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the profile card of the \"Luis\" must be presented with the photo of speaker \"luis.jpg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "luis.jpg",
      "offset": 76
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThePhotoOfSpeaker(String,String)"
});
formatter.result({
  "duration": 1230658,
  "status": "passed"
});
formatter.after({
  "duration": 217861,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title"
      ],
      "line": 32,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Software engineer"
      ],
      "line": 33,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Computer Engineer"
      ],
      "line": 34,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;3"
    },
    {
      "cells": [
        "Luis",
        "Computational Systems Engineer"
      ],
      "line": 35,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7532298,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 39749129,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704991535,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"Gabriel\" must be presented with the \"Software engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "Software engineer",
      "offset": 62
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThe(String,String)"
});
formatter.result({
  "duration": 59195669,
  "status": "passed"
});
formatter.after({
  "duration": 266845,
  "status": "passed"
});
formatter.before({
  "duration": 13499916,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 43848833,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706782007,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"Emanuel\" must be presented with the \"Computer Engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "Computer Engineer",
      "offset": 62
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThe(String,String)"
});
formatter.result({
  "duration": 66925301,
  "status": "passed"
});
formatter.after({
  "duration": 428724,
  "status": "passed"
});
formatter.before({
  "duration": 11197214,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 33237558,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706957882,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Open Landing Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the profile card of the \"Luis\" must be presented with the \"Computational Systems Engineer\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "Computational Systems Engineer",
      "offset": 59
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithThe(String,String)"
});
formatter.result({
  "duration": 56515092,
  "status": "passed"
});
formatter.after({
  "duration": 207132,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented with the short bio like \"\u003cshort bio\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;",
  "rows": [
    {
      "cells": [
        "speaker",
        "short bio"
      ],
      "line": 41,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;1"
    },
    {
      "cells": [
        "Gabriel",
        "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#."
      ],
      "line": 42,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;2"
    },
    {
      "cells": [
        "Emanuel",
        "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming."
      ],
      "line": 43,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;3"
    },
    {
      "cells": [
        "Luis",
        "I am a full stack developer with 2 years of experience. Involving with java, javascript and php."
      ],
      "line": 44,
      "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 21766969,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 33654620,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706797402,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"Gabriel\" must be presented with the short bio like \"I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheShortBioLike(String,String)"
});
formatter.result({
  "duration": 63233794,
  "status": "passed"
});
formatter.after({
  "duration": 393270,
  "status": "passed"
});
formatter.before({
  "duration": 11040932,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 27739718,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706908898,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"Emanuel\" must be presented with the short bio like \"I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheShortBioLike(String,String)"
});
formatter.result({
  "duration": 55950613,
  "status": "passed"
});
formatter.after({
  "duration": 261713,
  "status": "passed"
});
formatter.before({
  "duration": 6517634,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 31115397,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706665845,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Open Landing Page - View Speaker short bio",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-landing-page---view-speaker-short-bio;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 38,
  "name": "the profile card of the \"Luis\" must be presented with the short bio like \"I am a full stack developer with 2 years of experience. Involving with java, javascript and php.\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "I am a full stack developer with 2 years of experience. Involving with java, javascript and php.",
      "offset": 74
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedWithTheShortBioLike(String,String)"
});
formatter.result({
  "duration": 62240590,
  "status": "passed"
});
formatter.after({
  "duration": 408197,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must be presented an \"\u003csocial network image\u003e\" redirecting to \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;",
  "rows": [
    {
      "cells": [
        "speaker",
        "social network image",
        "link"
      ],
      "line": 51,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;1"
    },
    {
      "cells": [
        "Emanuel",
        "fb.png",
        "https://www.facebook.com/emanuel.silva.146"
      ],
      "line": 52,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;2"
    },
    {
      "cells": [
        "Luis",
        "in.png",
        "https://www.linkedin.com/in/luiscisnerosg/"
      ],
      "line": 53,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;3"
    },
    {
      "cells": [
        "Luis",
        "fb.png",
        "https://www.facebook.com/tiko.Luis.Cisneros"
      ],
      "line": 54,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;4"
    },
    {
      "cells": [
        "Luis",
        "twitter.png",
        "https://twitter.com/TikoCisneros"
      ],
      "line": 55,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10712041,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 30014896,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705616661,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Emanuel\" must be presented an \"fb.png\" redirecting to \"https://www.facebook.com/emanuel.silva.146\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "fb.png",
      "offset": 56
    },
    {
      "val": "https://www.facebook.com/emanuel.silva.146",
      "offset": 80
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 2021395,
  "status": "passed"
});
formatter.after({
  "duration": 372277,
  "status": "passed"
});
formatter.before({
  "duration": 14181023,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 45317879,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706443786,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Luis\" must be presented an \"in.png\" redirecting to \"https://www.linkedin.com/in/luiscisnerosg/\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "in.png",
      "offset": 53
    },
    {
      "val": "https://www.linkedin.com/in/luiscisnerosg/",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 2800469,
  "status": "passed"
});
formatter.after({
  "duration": 336822,
  "status": "passed"
});
formatter.before({
  "duration": 11320839,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 33578112,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706271177,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Luis\" must be presented an \"fb.png\" redirecting to \"https://www.facebook.com/tiko.Luis.Cisneros\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "fb.png",
      "offset": 53
    },
    {
      "val": "https://www.facebook.com/tiko.Luis.Cisneros",
      "offset": 77
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 2345154,
  "status": "passed"
});
formatter.after({
  "duration": 402133,
  "status": "passed"
});
formatter.before({
  "duration": 14848601,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 34354854,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 707283973,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Landing Page - View Speaker Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-enabled-social-networks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the profile card of the \"Luis\" must be presented an \"twitter.png\" redirecting to \"https://twitter.com/TikoCisneros\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 25
    },
    {
      "val": "twitter.png",
      "offset": 53
    },
    {
      "val": "https://twitter.com/TikoCisneros",
      "offset": 82
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 1964947,
  "status": "passed"
});
formatter.after({
  "duration": 927892,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"\u003cspeaker\u003e\" must not be presented an \"\u003csocial network image\u003e\" redirecting to \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;",
  "rows": [
    {
      "cells": [
        "speaker",
        "social network image",
        "link"
      ],
      "line": 61,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;1"
    },
    {
      "cells": [
        "Emanuel",
        "in.png",
        "https://www.linkedin.com/in/emanuel.silva/"
      ],
      "line": 62,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;2"
    },
    {
      "cells": [
        "Emanuel",
        "twitter.png",
        "https://twitter.com/emanuelsilva"
      ],
      "line": 63,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;3"
    },
    {
      "cells": [
        "Gabriel",
        "in.png",
        "https://www.linkedin.com/in/gabriel/"
      ],
      "line": 64,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;4"
    },
    {
      "cells": [
        "Gabriel",
        "fb.png",
        "https://www.facebook.com/gabriel.silva"
      ],
      "line": 65,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;5"
    },
    {
      "cells": [
        "Gabriel",
        "twitter.png",
        "https://twitter.com/gabrielsilva"
      ],
      "line": 66,
      "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11150096,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 32686142,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705792069,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Emanuel\" must not be presented an \"in.png\" redirecting to \"https://www.linkedin.com/in/emanuel.silva/\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "in.png",
      "offset": 60
    },
    {
      "val": "https://www.linkedin.com/in/emanuel.silva/",
      "offset": 84
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 204627889,
  "status": "passed"
});
formatter.after({
  "duration": 410530,
  "status": "passed"
});
formatter.before({
  "duration": 12502980,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 34651088,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703931154,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Emanuel\" must not be presented an \"twitter.png\" redirecting to \"https://twitter.com/emanuelsilva\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 25
    },
    {
      "val": "twitter.png",
      "offset": 60
    },
    {
      "val": "https://twitter.com/emanuelsilva",
      "offset": 89
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 200519321,
  "status": "passed"
});
formatter.after({
  "duration": 222060,
  "status": "passed"
});
formatter.before({
  "duration": 5022465,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 23755708,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706752150,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Gabriel\" must not be presented an \"in.png\" redirecting to \"https://www.linkedin.com/in/gabriel/\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "in.png",
      "offset": 60
    },
    {
      "val": "https://www.linkedin.com/in/gabriel/",
      "offset": 84
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 201684200,
  "status": "passed"
});
formatter.after({
  "duration": 188937,
  "status": "passed"
});
formatter.before({
  "duration": 5443258,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 24904726,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703322357,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Gabriel\" must not be presented an \"fb.png\" redirecting to \"https://www.facebook.com/gabriel.silva\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "fb.png",
      "offset": 60
    },
    {
      "val": "https://www.facebook.com/gabriel.silva",
      "offset": 84
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 201218622,
  "status": "passed"
});
formatter.after({
  "duration": 748285,
  "status": "passed"
});
formatter.before({
  "duration": 11386618,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 35932130,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704576340,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Landing Page - View Speaker Not Enabled Social Networks",
  "description": "",
  "id": "present-landing-page-with-profile-cards;landing-page---view-speaker-not-enabled-social-networks;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the profile card of the \"Gabriel\" must not be presented an \"twitter.png\" redirecting to \"https://twitter.com/gabrielsilva\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 25
    },
    {
      "val": "twitter.png",
      "offset": 60
    },
    {
      "val": "https://twitter.com/gabrielsilva",
      "offset": 89
    }
  ],
  "location": "StepdefsLandingPage.theProfileCardOfTheMustNotBePresentedAnEnabledRedirectingTo(String,String,String)"
});
formatter.result({
  "duration": 201456543,
  "status": "passed"
});
formatter.after({
  "duration": 511297,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 68,
      "value": "#  Scenario Outline: Landing Page - View Speaker Redirect Speaker Social Networks Links"
    },
    {
      "line": 69,
      "value": "#    And I press \"\u003csocial network\u003e\" of \"\u003cspeaker\u003e\""
    },
    {
      "line": 70,
      "value": "#    Then Open new tab and the title of page openned is \"\u003cvalue\u003e\""
    },
    {
      "line": 71,
      "value": "#"
    },
    {
      "line": 72,
      "value": "#    Examples:"
    },
    {
      "line": 73,
      "value": "#      | speaker | social network | value |"
    },
    {
      "line": 74,
      "value": "#      | Emanuel | facebook       | Emanuel Silva \\| Facebook |"
    },
    {
      "line": 75,
      "value": "#      | Luis    | linkedIn       | LinkedIn |"
    },
    {
      "line": 76,
      "value": "#      | Luis    | facebook       | Luis Alberto Cisneros Gómez \\| Facebook |"
    },
    {
      "line": 77,
      "value": "#      | Luis    | twitter        | Luis Cisneros (7!k#) (@TikoCisneros) \\| Twitter |"
    }
  ],
  "line": 79,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"\u003cspeaker\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title"
      ],
      "line": 84,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Gabriel Silva - Details Page"
      ],
      "line": 85,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Emanuel Silva - Details Page"
      ],
      "line": 86,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;3"
    },
    {
      "cells": [
        "Luis",
        "Luis Alberto Cisneros Gómez - Details Page"
      ],
      "line": 87,
      "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13204614,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 32887208,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705907764,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"Gabriel Silva - Details Page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    }
  ],
  "location": "StepdefsLandingPage.iPressMoreInfoButtonOf(String)"
});
formatter.result({
  "duration": 4715111107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel Silva - Details Page",
      "offset": 44
    }
  ],
  "location": "StepdefsLandingPage.theDetailPageMustBePresentedWithThe(String)"
});
formatter.result({
  "duration": 317228,
  "status": "passed"
});
formatter.after({
  "duration": 357348,
  "status": "passed"
});
formatter.before({
  "duration": 14377890,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 41124871,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705286371,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"Emanuel Silva - Details Page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 29
    }
  ],
  "location": "StepdefsLandingPage.iPressMoreInfoButtonOf(String)"
});
formatter.result({
  "duration": 1125762689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel Silva - Details Page",
      "offset": 44
    }
  ],
  "location": "StepdefsLandingPage.theDetailPageMustBePresentedWithThe(String)"
});
formatter.result({
  "duration": 166078,
  "status": "passed"
});
formatter.after({
  "duration": 433856,
  "status": "passed"
});
formatter.before({
  "duration": 7701641,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 32701537,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 706638788,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Open Detail Page - View Speaker Title",
  "description": "",
  "id": "present-landing-page-with-profile-cards;open-detail-page---view-speaker-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "I press more info button of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the detail page must be presented with the \"Luis Alberto Cisneros Gómez - Details Page\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 29
    }
  ],
  "location": "StepdefsLandingPage.iPressMoreInfoButtonOf(String)"
});
formatter.result({
  "duration": 1063504837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis Alberto Cisneros Gómez - Details Page",
      "offset": 44
    }
  ],
  "location": "StepdefsLandingPage.theDetailPageMustBePresentedWithThe(String)"
});
formatter.result({
  "duration": 79774,
  "status": "passed"
});
formatter.after({
  "duration": 212729,
  "status": "passed"
});
formatter.uri("PresentSpeakerDetailPage.feature");
formatter.feature({
  "line": 1,
  "name": "Present Speaker Detail Page",
  "description": "As a  User\r\nI want   to able to see the detailed information about one specific speaker (photo, working experience, education and training, projects, certifications and awards)\r\nSo that  i may know the projects and accomplishments of one specific speaker",
  "id": "present-speaker-detail-page",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;",
  "rows": [
    {
      "cells": [
        "speaker"
      ],
      "line": 13,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;1"
    },
    {
      "cells": [
        "Luis"
      ],
      "line": 14,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;2"
    },
    {
      "cells": [
        "Gabriel"
      ],
      "line": 15,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;3"
    },
    {
      "cells": [
        "Emanuel"
      ],
      "line": 16,
      "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3873913,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 87009562,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701622387,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact()"
});
formatter.result({
  "duration": 34099672,
  "status": "passed"
});
formatter.after({
  "duration": 364812,
  "status": "passed"
});
formatter.before({
  "duration": 4913767,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 79215084,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701801528,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact()"
});
formatter.result({
  "duration": 14949834,
  "status": "passed"
});
formatter.after({
  "duration": 349417,
  "status": "passed"
});
formatter.before({
  "duration": 7269185,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Speaker Detail Page - Menu and Back Button",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---menu-and-back-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the menu must display a back button and links to navigate for different information sections with: return, home, resume, projects and contact",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 92146322,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700712223,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.theMenuMustDisplayABackButtonAndLinksToNavigateForDifferentInformationSectionsWithReturnHomeResumeProjectsAndContact()"
});
formatter.result({
  "duration": 11332502,
  "status": "passed"
});
formatter.after({
  "duration": 350817,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"\u003cphoto\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;",
  "rows": [
    {
      "cells": [
        "speaker",
        "photo"
      ],
      "line": 24,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;1"
    },
    {
      "cells": [
        "Gabriel",
        "gabriel.jpg"
      ],
      "line": 25,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;2"
    },
    {
      "cells": [
        "Emanuel",
        "emanuel.jpg"
      ],
      "line": 26,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;3"
    },
    {
      "cells": [
        "Luis",
        "luis.jpg"
      ],
      "line": 27,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7627466,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"gabriel.jpg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 88046151,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701432518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gabriel.jpg",
      "offset": 47
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayThePhotoConctentIn(String)"
});
formatter.result({
  "duration": 3014132,
  "status": "passed"
});
formatter.after({
  "duration": 383939,
  "status": "passed"
});
formatter.before({
  "duration": 8249792,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"emanuel.jpg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 93412435,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701389132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "emanuel.jpg",
      "offset": 47
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayThePhotoConctentIn(String)"
});
formatter.result({
  "duration": 3600071,
  "status": "passed"
});
formatter.after({
  "duration": 994603,
  "status": "passed"
});
formatter.before({
  "duration": 9529901,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Speaker Detail Page - Check speakers photo",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-photo;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "the page must be display the photo content in \"luis.jpg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 92860085,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701983934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "luis.jpg",
      "offset": 47
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayThePhotoConctentIn(String)"
});
formatter.result({
  "duration": 2385275,
  "status": "passed"
});
formatter.after({
  "duration": 426391,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"\u003cname\u003e\" of the speaker selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;",
  "rows": [
    {
      "cells": [
        "speaker",
        "name"
      ],
      "line": 35,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;1"
    },
    {
      "cells": [
        "Luis",
        "Luis Alberto Cisneros Gómez"
      ],
      "line": 36,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;2"
    },
    {
      "cells": [
        "Gabriel",
        "Gabriel Silva"
      ],
      "line": 37,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;3"
    },
    {
      "cells": [
        "Emanuel",
        "Emanuel Silva"
      ],
      "line": 38,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8658457,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"Luis Alberto Cisneros Gómez\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 79486128,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700908625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis Alberto Cisneros Gómez",
      "offset": 30
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 3285176,
  "status": "passed"
});
formatter.after({
  "duration": 390470,
  "status": "passed"
});
formatter.before({
  "duration": 8269387,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"Gabriel Silva\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 96864155,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701890632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel Silva",
      "offset": 30
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 1762015,
  "status": "passed"
});
formatter.after({
  "duration": 257048,
  "status": "passed"
});
formatter.before({
  "duration": 6739694,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Speaker Detail Page - Check speakers name",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the page must be display the \"Emanuel Silva\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 99673488,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701480101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel Silva",
      "offset": 30
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 2939023,
  "status": "passed"
});
formatter.after({
  "duration": 393269,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 40,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"\u003ctitle\u003e\" of the speaker selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title"
      ],
      "line": 46,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;1"
    },
    {
      "cells": [
        "Luis",
        "Computational Systems Engineer"
      ],
      "line": 47,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;2"
    },
    {
      "cells": [
        "Gabriel",
        "Software engineer"
      ],
      "line": 48,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;3"
    },
    {
      "cells": [
        "Emanuel",
        "Computer Engineer"
      ],
      "line": 49,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8485847,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"Computational Systems Engineer\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 103707415,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700654842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computational Systems Engineer",
      "offset": 36
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 5616800,
  "status": "passed"
});
formatter.after({
  "duration": 348484,
  "status": "passed"
});
formatter.before({
  "duration": 8834332,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"Software engineer\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 67702509,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701436716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software engineer",
      "offset": 36
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 5355087,
  "status": "passed"
});
formatter.after({
  "duration": 418927,
  "status": "passed"
});
formatter.before({
  "duration": 7708639,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Speaker Detail Page - Check speakers title",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-title;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 41,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "the page must be display the title \"Computer Engineer\" of the speaker selected",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 79404488,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701113424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Engineer",
      "offset": 36
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayTheTitleOfTheSpeakerSelected(String)"
});
formatter.result({
  "duration": 2313431,
  "status": "passed"
});
formatter.after({
  "duration": 250517,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 51,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"\u003csocial network\u003e\" redirecting to \"\u003clink\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;",
  "rows": [
    {
      "cells": [
        "speaker",
        "social network",
        "link"
      ],
      "line": 57,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;1"
    },
    {
      "cells": [
        "Emanuel",
        "facebook",
        "https://www.facebook.com/emanuel.silva.146"
      ],
      "line": 58,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;2"
    },
    {
      "cells": [
        "Luis",
        "linkedin",
        "https://www.linkedin.com/in/luiscisnerosg/"
      ],
      "line": 59,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;3"
    },
    {
      "cells": [
        "Luis",
        "facebook",
        "https://www.facebook.com/tiko.Luis.Cisneros"
      ],
      "line": 60,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;4"
    },
    {
      "cells": [
        "Luis",
        "twitter",
        "https://twitter.com/TikoCisneros"
      ],
      "line": 61,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6602073,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"facebook\" redirecting to \"https://www.facebook.com/emanuel.silva.146\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 75059398,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700512090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/emanuel.silva.146",
      "offset": 74
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 1171411,
  "status": "passed"
});
formatter.after({
  "duration": 210397,
  "status": "passed"
});
formatter.before({
  "duration": 4836326,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"linkedin\" redirecting to \"https://www.linkedin.com/in/luiscisnerosg/\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 72982488,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701255710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "linkedin",
      "offset": 48
    },
    {
      "val": "https://www.linkedin.com/in/luiscisnerosg/",
      "offset": 74
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 2287307,
  "status": "passed"
});
formatter.after({
  "duration": 288304,
  "status": "passed"
});
formatter.before({
  "duration": 7602742,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"facebook\" redirecting to \"https://www.facebook.com/tiko.Luis.Cisneros\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 75089256,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701471238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "facebook",
      "offset": 48
    },
    {
      "val": "https://www.facebook.com/tiko.Luis.Cisneros",
      "offset": 74
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 1181674,
  "status": "passed"
});
formatter.after({
  "duration": 275242,
  "status": "passed"
});
formatter.before({
  "duration": 5069583,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Speaker Detail Page - Check speakers social networks",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-social-networks;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 52,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the page must be presented with an icon of the \"twitter\" redirecting to \"https://twitter.com/TikoCisneros\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 76533576,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701426452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "twitter",
      "offset": 48
    },
    {
      "val": "https://twitter.com/TikoCisneros",
      "offset": 73
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBePresentedWithAnIconOfTheRedirectingTo(String,String)"
});
formatter.result({
  "duration": 2587741,
  "status": "passed"
});
formatter.after({
  "duration": 461847,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"\u003cwork experience\u003e\" with the \"\u003cjob\u003e\" and \"\u003cactivities\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;",
  "rows": [
    {
      "cells": [
        "speaker",
        "work experience",
        "job",
        "activities"
      ],
      "line": 69,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Polytechnic of Leiria",
        "Guest assistant",
        "Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics."
      ],
      "line": 70,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Internship at the College Conciliar de Maria Immaculada - Leiria",
        "Intern",
        "Maintenance and expansion of existing computer network in college, Technical support"
      ],
      "line": 71,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;3"
    },
    {
      "cells": [
        "Luis",
        "Yachay E.P.",
        "Web programmer",
        "Development of web applications, web services, web apps."
      ],
      "line": 72,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;4"
    },
    {
      "cells": [
        "Luis",
        "Nemecis Solutions",
        "Website developer",
        "Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 73,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7775351,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Polytechnic of Leiria\" with the \"Guest assistant\" and \"Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 84396630,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701077968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Polytechnic of Leiria",
      "offset": 36
    },
    {
      "val": "Guest assistant",
      "offset": 69
    },
    {
      "val": "Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.",
      "offset": 91
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 11875522,
  "status": "passed"
});
formatter.after({
  "duration": 327024,
  "status": "passed"
});
formatter.before({
  "duration": 10626670,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Internship at the College Conciliar de Maria Immaculada - Leiria\" with the \"Intern\" and \"Maintenance and expansion of existing computer network in college, Technical support\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 60067112,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700356275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Internship at the College Conciliar de Maria Immaculada - Leiria",
      "offset": 36
    },
    {
      "val": "Intern",
      "offset": 112
    },
    {
      "val": "Maintenance and expansion of existing computer network in college, Technical support",
      "offset": 125
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 4125363,
  "status": "passed"
});
formatter.after({
  "duration": 198267,
  "status": "passed"
});
formatter.before({
  "duration": 3946689,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Yachay E.P.\" with the \"Web programmer\" and \"Development of web applications, web services, web apps.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 76715981,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701174536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yachay E.P.",
      "offset": 36
    },
    {
      "val": "Web programmer",
      "offset": 59
    },
    {
      "val": "Development of web applications, web services, web apps.",
      "offset": 80
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 7202007,
  "status": "passed"
});
formatter.after({
  "duration": 348017,
  "status": "passed"
});
formatter.before({
  "duration": 7297642,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Speaker Detail Page - Check speakers work experience",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-work-experience;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 64,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the page must be display a list of \"Nemecis Solutions\" with the \"Website developer\" and \"Development of static and dynamic websites (html, joomla, wordpress).\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 65632130,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700805060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nemecis Solutions",
      "offset": 36
    },
    {
      "val": "Website developer",
      "offset": 65
    },
    {
      "val": "Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 89
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithTheAnd(String,String,String)"
});
formatter.result({
  "duration": 5503905,
  "status": "passed"
});
formatter.after({
  "duration": 278041,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"\u003ctitle\u003e\" , \"\u003cinstitution\u003e\" and \"\u003clevel\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title",
        "institution",
        "level"
      ],
      "line": 81,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Course of science and technology",
        "Escola Secundária Raul Proença, Caldas da Rainha, Portugal",
        "High School"
      ],
      "line": 82,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;2"
    },
    {
      "cells": [
        "Gabriel",
        "Mobile Computing",
        "Polytechnic of Leiria",
        "Master Degree"
      ],
      "line": 83,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;3"
    },
    {
      "cells": [
        "Gabriel",
        "Computer Science",
        "Polytechnic of Leiria",
        "Bachelor Degree"
      ],
      "line": 84,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;4"
    },
    {
      "cells": [
        "Emanuel",
        "Computer Science",
        "Polytechnic Institute of Leiria",
        "Bachelor Degree"
      ],
      "line": 85,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;5"
    },
    {
      "cells": [
        "Emanuel",
        "Mobile Computing",
        "Polytechnic Institute of Leiria",
        "Master Degree"
      ],
      "line": 86,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;6"
    },
    {
      "cells": [
        "Luis",
        "Computational Systems Engineer",
        "Universidad Técnica del Norte",
        "Bachelor"
      ],
      "line": 87,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7441795,
  "status": "passed"
});
formatter.scenario({
  "line": 82,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Course of science and technology\" , \"Escola Secundária Raul Proença, Caldas da Rainha, Portugal\" and \"High School\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 73904315,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700680967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Course of science and technology",
      "offset": 60
    },
    {
      "val": "Escola Secundária Raul Proença, Caldas da Rainha, Portugal",
      "offset": 97
    },
    {
      "val": "High School",
      "offset": 162
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 7133431,
  "status": "passed"
});
formatter.after({
  "duration": 377874,
  "status": "passed"
});
formatter.before({
  "duration": 8181682,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Mobile Computing\" , \"Polytechnic of Leiria\" and \"Master Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 60327892,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701771671,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Computing",
      "offset": 60
    },
    {
      "val": "Polytechnic of Leiria",
      "offset": 81
    },
    {
      "val": "Master Degree",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 8555824,
  "status": "passed"
});
formatter.after({
  "duration": 385805,
  "status": "passed"
});
formatter.before({
  "duration": 8090712,
  "status": "passed"
});
formatter.scenario({
  "line": 84,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Computer Science\" , \"Polytechnic of Leiria\" and \"Bachelor Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 66443394,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701564540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Science",
      "offset": 60
    },
    {
      "val": "Polytechnic of Leiria",
      "offset": 81
    },
    {
      "val": "Bachelor Degree",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 4642258,
  "status": "passed"
});
formatter.after({
  "duration": 239320,
  "status": "passed"
});
formatter.before({
  "duration": 5752556,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Computer Science\" , \"Polytechnic Institute of Leiria\" and \"Bachelor Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 63459585,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700989332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Science",
      "offset": 60
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 81
    },
    {
      "val": "Bachelor Degree",
      "offset": 119
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 3575345,
  "status": "passed"
});
formatter.after({
  "duration": 222526,
  "status": "passed"
});
formatter.before({
  "duration": 6302107,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Mobile Computing\" , \"Polytechnic Institute of Leiria\" and \"Master Degree\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 70137700,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701667639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mobile Computing",
      "offset": 60
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 81
    },
    {
      "val": "Master Degree",
      "offset": 119
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 345407123,
  "status": "passed"
});
formatter.after({
  "duration": 162346,
  "status": "passed"
});
formatter.before({
  "duration": 3492773,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Speaker Detail Page - Check speakers education",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-education;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "the page must be display a list of personal education with \"Computational Systems Engineer\" , \"Universidad Técnica del Norte\" and \"Bachelor\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 54713425,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701472171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computational Systems Engineer",
      "offset": 60
    },
    {
      "val": "Universidad Técnica del Norte",
      "offset": 95
    },
    {
      "val": "Bachelor",
      "offset": 131
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfPersonalEducationWithAnd(String,String,String)"
});
formatter.result({
  "duration": 7200142,
  "status": "passed"
});
formatter.after({
  "duration": 795403,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"\u003ctitle\u003e\", \"\u003cplace\u003e\" and \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;",
  "rows": [
    {
      "cells": [
        "speaker",
        "title",
        "place",
        "description"
      ],
      "line": 95,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Evolution of Virtual Creatures",
        "Polytechnic of Leiria",
        "The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine."
      ],
      "line": 96,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Silent Television",
        "Polytechnic Institute of Leiria",
        "This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices."
      ],
      "line": 97,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;3"
    },
    {
      "cells": [
        "Emanuel",
        "Smart Garden",
        "Polytechnic Institute of Leiria",
        "This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time."
      ],
      "line": 98,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;4"
    },
    {
      "cells": [
        "Luis",
        "Ibarra Tourism App",
        "Ibarra - Ecuador",
        "Android Tourism App builded with Apache Cordova and web technologies."
      ],
      "line": 99,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6605806,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Evolution of Virtual Creatures\", \"Polytechnic of Leiria\" and \"The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 62798538,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700314756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Evolution of Virtual Creatures",
      "offset": 50
    },
    {
      "val": "Polytechnic of Leiria",
      "offset": 84
    },
    {
      "val": "The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evolves neural networks that control the creatures. These creatures are created and simulated in the Unity3D game engine.",
      "offset": 112
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5913502,
  "status": "passed"
});
formatter.after({
  "duration": 387205,
  "status": "passed"
});
formatter.before({
  "duration": 7910638,
  "status": "passed"
});
formatter.scenario({
  "line": 97,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Silent Television\", \"Polytechnic Institute of Leiria\" and \"This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 68719971,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 702074904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Silent Television",
      "offset": 50
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 71
    },
    {
      "val": "This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there was a great amount of noise. For this purpose, we developed an equipment that captures and conveys the sound of the television to Android smartphones/tablets. This equipment is connected to the television and the router on-site ad conveys the audio through the network to the Android devices, also sending some information on the television and transmission setups to these devices.",
      "offset": 109
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5594874,
  "status": "passed"
});
formatter.after({
  "duration": 390937,
  "status": "passed"
});
formatter.before({
  "duration": 7456256,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Smart Garden\", \"Polytechnic Institute of Leiria\" and \"This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 62471047,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701173604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Smart Garden",
      "offset": 50
    },
    {
      "val": "Polytechnic Institute of Leiria",
      "offset": 66
    },
    {
      "val": "This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan for the garden/zone in question, as well as an application for users that allows to change the settings and to visualize State and garden related information in real time.",
      "offset": 104
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 2713698,
  "status": "passed"
});
formatter.after({
  "duration": 183806,
  "status": "passed"
});
formatter.before({
  "duration": 3148021,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Speaker Detail Page - Check speakers projects",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-projects;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 92,
  "name": "the page must be display a list of projects with \"Ibarra Tourism App\", \"Ibarra - Ecuador\" and \"Android Tourism App builded with Apache Cordova and web technologies.\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 61332759,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701263641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ibarra Tourism App",
      "offset": 50
    },
    {
      "val": "Ibarra - Ecuador",
      "offset": 72
    },
    {
      "val": "Android Tourism App builded with Apache Cordova and web technologies.",
      "offset": 95
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfProjectsWithAnd(String,String,String)"
});
formatter.result({
  "duration": 5257587,
  "status": "passed"
});
formatter.after({
  "duration": 374609,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"\u003cspeaker\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"\u003ccertification\u003e\" with the \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 106,
  "name": "",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;",
  "rows": [
    {
      "cells": [
        "speaker",
        "certification",
        "description"
      ],
      "line": 107,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;1"
    },
    {
      "cells": [
        "Gabriel",
        "Workshop IBM: Big Data",
        "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours."
      ],
      "line": 108,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;2"
    },
    {
      "cells": [
        "Emanuel",
        "Workshop Cloud Computing",
        "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours."
      ],
      "line": 109,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;3"
    },
    {
      "cells": [
        "Luis",
        "Cisco IT ESSENTIALS BASIC",
        "Universidad Técnica del Norte, Academia CISCO / Enero de 2013"
      ],
      "line": 110,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;4"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: PHP Course",
        "SoloLearn Licencia 1059-593722 / February 2016"
      ],
      "line": 111,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;5"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: JavaScript Fundamentals",
        "SoloLearn Licencia 1024-593722 / February 2016"
      ],
      "line": 112,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;6"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: SQL Fundamentals",
        "SoloLearn Licencia 1060-593722 / February 2016"
      ],
      "line": 113,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;7"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: HTML Fundamentals",
        "SoloLearn Licencia 1014-593722 / February 2016"
      ],
      "line": 114,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;8"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: CSS Fundamentals",
        "SoloLearn Licencia 1023-593722 / February 2016"
      ],
      "line": 115,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;9"
    },
    {
      "cells": [
        "Luis",
        "Certificate of Completion: Java Course",
        "SoloLearn Licencia 1068-593722 / February 2016"
      ],
      "line": 116,
      "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;10"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5527230,
  "status": "passed"
});
formatter.scenario({
  "line": 108,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Gabriel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Workshop IBM: Big Data\" with the \"Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 61918698,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700496229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Workshop IBM: Big Data",
      "offset": 36
    },
    {
      "val": "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.",
      "offset": 70
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 1933225,
  "status": "passed"
});
formatter.after({
  "duration": 199667,
  "status": "passed"
});
formatter.before({
  "duration": 4730429,
  "status": "passed"
});
formatter.scenario({
  "line": 109,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Emanuel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Workshop Cloud Computing\" with the \"Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 53339547,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701424587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Workshop Cloud Computing",
      "offset": 36
    },
    {
      "val": "Held on July 12 and 13 at the School of Technology and Management of the Polytechnic Institute of Leiria, lasting eleven hours.",
      "offset": 72
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 2393205,
  "status": "passed"
});
formatter.after({
  "duration": 251916,
  "status": "passed"
});
formatter.before({
  "duration": 4190208,
  "status": "passed"
});
formatter.scenario({
  "line": 110,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Cisco IT ESSENTIALS BASIC\" with the \"Universidad Técnica del Norte, Academia CISCO / Enero de 2013\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 65383946,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701120887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cisco IT ESSENTIALS BASIC",
      "offset": 36
    },
    {
      "val": "Universidad Técnica del Norte, Academia CISCO / Enero de 2013",
      "offset": 73
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 3742823,
  "status": "passed"
});
formatter.after({
  "duration": 360614,
  "status": "passed"
});
formatter.before({
  "duration": 6527898,
  "status": "passed"
});
formatter.scenario({
  "line": 111,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: PHP Course\" with the \"SoloLearn Licencia 1059-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 61453585,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701318688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: PHP Course",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1059-593722 / February 2016",
      "offset": 85
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 4090375,
  "status": "passed"
});
formatter.after({
  "duration": 379741,
  "status": "passed"
});
formatter.before({
  "duration": 6608138,
  "status": "passed"
});
formatter.scenario({
  "line": 112,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: JavaScript Fundamentals\" with the \"SoloLearn Licencia 1024-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 65108705,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 700892763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: JavaScript Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1024-593722 / February 2016",
      "offset": 98
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 1793271,
  "status": "passed"
});
formatter.after({
  "duration": 193602,
  "status": "passed"
});
formatter.before({
  "duration": 3298704,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: SQL Fundamentals\" with the \"SoloLearn Licencia 1060-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 52055240,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701200194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: SQL Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1060-593722 / February 2016",
      "offset": 91
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 2625995,
  "status": "passed"
});
formatter.after({
  "duration": 236988,
  "status": "passed"
});
formatter.before({
  "duration": 4066582,
  "status": "passed"
});
formatter.scenario({
  "line": 114,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: HTML Fundamentals\" with the \"SoloLearn Licencia 1014-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 58854182,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 702216724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: HTML Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1014-593722 / February 2016",
      "offset": 92
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 2593805,
  "status": "passed"
});
formatter.after({
  "duration": 207598,
  "status": "passed"
});
formatter.before({
  "duration": 3568348,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: CSS Fundamentals\" with the \"SoloLearn Licencia 1023-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 57494766,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 699928017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: CSS Fundamentals",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1023-593722 / February 2016",
      "offset": 91
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 1964947,
  "status": "passed"
});
formatter.after({
  "duration": 178674,
  "status": "passed"
});
formatter.before({
  "duration": 3536625,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Speaker Detail Page - Check speakers certifications",
  "description": "",
  "id": "present-speaker-detail-page;speaker-detail-page---check-speakers-certifications;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "I am the profile details page of \"Luis\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "The page is loaded",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "the page must be display a list of \"Certificate of Completion: Java Course\" with the \"SoloLearn Licencia 1068-593722 / February 2016\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 34
    }
  ],
  "location": "StepdefsDetailsPage.iAmTheProfileDetailsPageOf(String)"
});
formatter.result({
  "duration": 59549284,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsDetailsPage.thePageIsLoaded()"
});
formatter.result({
  "duration": 701402661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Certificate of Completion: Java Course",
      "offset": 36
    },
    {
      "val": "SoloLearn Licencia 1068-593722 / February 2016",
      "offset": 86
    }
  ],
  "location": "StepdefsDetailsPage.thePageMustBeDisplayAListOfWithThe(String,String)"
});
formatter.result({
  "duration": 3791340,
  "status": "passed"
});
formatter.after({
  "duration": 497768,
  "status": "passed"
});
formatter.uri("SearchInSpeakerProfileCard.feature");
formatter.feature({
  "line": 1,
  "name": "Search in Speaker Profile",
  "description": "As a User\r\nI want to be able to search information about the speakers from each profile card\r\nSo that I can easily find information about the speakers and i can view and compare all the speakers information without be forced to open multiple detailed profile pages",
  "id": "search-in-speaker-profile",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"\u003ctag\u003e\" on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"\u003cspeaker\u003e\" content adjusts automatically with the \"\u003cinformation\u003e\" found related with the tag selected",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;",
  "rows": [
    {
      "cells": [
        "tag",
        "speaker",
        "information"
      ],
      "line": 15,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;1"
    },
    {
      "cells": [
        "Default",
        "Luis",
        "I am a full stack developer with 2 years of experience. Involving with java, javascript and php."
      ],
      "line": 16,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;2"
    },
    {
      "cells": [
        "Default",
        "Gabriel",
        "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#."
      ],
      "line": 17,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;3"
    },
    {
      "cells": [
        "Default",
        "Emanuel",
        "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming."
      ],
      "line": 18,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;4"
    },
    {
      "cells": [
        "Work",
        "Luis",
        "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 19,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;5"
    },
    {
      "cells": [
        "Work",
        "Emanuel",
        "Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support"
      ],
      "line": 20,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;6"
    },
    {
      "cells": [
        "Work",
        "Gabriel",
        "Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics."
      ],
      "line": 21,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;7"
    },
    {
      "cells": [
        "Education",
        "Emanuel",
        "Mobile Computing in Polytechnic Institute of Leiria. \u0026 Computer Science in Polytechnic Institute of Leiria."
      ],
      "line": 22,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;8"
    },
    {
      "cells": [
        "Education",
        "Luis",
        "Computational Systems Engineer in Universidad Técnica del Norte."
      ],
      "line": 23,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;9"
    },
    {
      "cells": [
        "Education",
        "Gabriel",
        "Mobile Computing in Polytechnic of Leiria. \u0026 Computer Science in Polytechnic of Leiria. \u0026 Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal."
      ],
      "line": 24,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;10"
    },
    {
      "cells": [
        "Relevant Projects",
        "Emanuel",
        "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... \u0026 Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo..."
      ],
      "line": 25,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;11"
    },
    {
      "cells": [
        "Relevant Projects",
        "Luis",
        "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies...."
      ],
      "line": 26,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;12"
    },
    {
      "cells": [
        "Relevant Projects",
        "Gabriel",
        "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol..."
      ],
      "line": 27,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;13"
    },
    {
      "cells": [
        "Web",
        "Luis",
        "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 28,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;14"
    },
    {
      "cells": [
        "Web",
        "Emanuel",
        "Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo..."
      ],
      "line": 29,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;15"
    },
    {
      "cells": [
        "Joomla",
        "Luis",
        "Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress)."
      ],
      "line": 30,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;16"
    },
    {
      "cells": [
        "Android",
        "Luis",
        "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies...."
      ],
      "line": 31,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6338961,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 25202361,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704331888,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Default\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"I am a full stack developer with 2 years of experience. Involving with java, javascript and php.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 69854994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "I am a full stack developer with 2 years of experience. Involving with java, javascript and php.",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1623927,
  "status": "passed"
});
formatter.after({
  "duration": 371810,
  "status": "passed"
});
formatter.before({
  "duration": 6573616,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 23413289,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703241650,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Default\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 75420012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "I am a computer science student for 3 years, specializing in information systems and experienced in javascript, java and C#.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2168813,
  "status": "passed"
});
formatter.after({
  "duration": 304166,
  "status": "passed"
});
formatter.before({
  "duration": 6627732,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 21274799,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703673174,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Default\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Default",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 68967222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "I am student of the Master in Computer Engineering - Mobile Computing at the Polytechnic of Leiria - IPL. I have knowledge in computer networks, Java, JavaScript and Arduino programming.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1562814,
  "status": "passed"
});
formatter.after({
  "duration": 372277,
  "status": "passed"
});
formatter.before({
  "duration": 6573150,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 22874468,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703168408,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Work\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 62434659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2786475,
  "status": "passed"
});
formatter.after({
  "duration": 231856,
  "status": "passed"
});
formatter.before({
  "duration": 4640858,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 22907124,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703139951,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Work\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 62383810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Intern in Internship at the College Conciliar de Maria Immaculada - Leiria. Maintenance and expansion of existing computer network in college, Technical support",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1526427,
  "status": "passed"
});
formatter.after({
  "duration": 363880,
  "status": "passed"
});
formatter.before({
  "duration": 6630531,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15681324,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702368807,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Work\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Work",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 52247444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "Guest assistant in Polytechnic of Leiria - ESTG. Lecturing of practical classes of curricular units of Algorithms and Data Structures and Security Topics.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 796802,
  "status": "passed"
});
formatter.after({
  "duration": 202466,
  "status": "passed"
});
formatter.before({
  "duration": 3880444,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15984090,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704959346,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Education\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Mobile Computing in Polytechnic Institute of Leiria. \u0026 Computer Science in Polytechnic Institute of Leiria.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 63238459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Mobile Computing in Polytechnic Institute of Leiria. \u0026 Computer Science in Polytechnic Institute of Leiria.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2783209,
  "status": "passed"
});
formatter.after({
  "duration": 303233,
  "status": "passed"
});
formatter.before({
  "duration": 8778350,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 28273408,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703212726,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Education\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Computational Systems Engineer in Universidad Técnica del Norte.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 60159016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Computational Systems Engineer in Universidad Técnica del Norte.",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1576810,
  "status": "passed"
});
formatter.after({
  "duration": 336822,
  "status": "passed"
});
formatter.before({
  "duration": 6460254,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 25344181,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702707961,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Education\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"Mobile Computing in Polytechnic of Leiria. \u0026 Computer Science in Polytechnic of Leiria. \u0026 Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal.\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Education",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 49735278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "Mobile Computing in Polytechnic of Leiria. \u0026 Computer Science in Polytechnic of Leiria. \u0026 Course of science and technology in Escola Secundária Raul Proença, Caldas da Rainha, Portugal.",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1526426,
  "status": "passed"
});
formatter.after({
  "duration": 209464,
  "status": "passed"
});
formatter.before({
  "duration": 3294972,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15073926,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704577740,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Relevant Projects\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... \u0026 Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Relevant Projects",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 85203695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w... \u0026 Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 2632059,
  "status": "passed"
});
formatter.after({
  "duration": 368544,
  "status": "passed"
});
formatter.before({
  "duration": 6379548,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 21904123,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705051715,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Relevant Projects\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Relevant Projects",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 66275450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1711632,
  "status": "passed"
});
formatter.after({
  "duration": 369011,
  "status": "passed"
});
formatter.before({
  "duration": 6574549,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 19725514,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704657513,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Relevant Projects\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Gabriel\" content adjusts automatically with the \"Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Relevant Projects",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 62539158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 19
    },
    {
      "val": "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1874444,
  "status": "passed"
});
formatter.after({
  "duration": 341953,
  "status": "passed"
});
formatter.before({
  "duration": 9917106,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 22427083,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703530421,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Web\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 51987130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1274043,
  "status": "passed"
});
formatter.after({
  "duration": 179140,
  "status": "passed"
});
formatter.before({
  "duration": 3875312,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 16352635,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705626457,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Web\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Emanuel\" content adjusts automatically with the \"Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 53846179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 19
    },
    {
      "val": "Smart Garden: This project consists in the implementation of an automatic irrigation system that uses several sensors in order to decide the best irrigation plan fo...",
      "offset": 68
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 756216,
  "status": "passed"
});
formatter.after({
  "duration": 194536,
  "status": "passed"
});
formatter.before({
  "duration": 4740692,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15143436,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704311361,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Joomla\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joomla",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 64546558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Website developer in Nemecis Solutions. Development of static and dynamic websites (html, joomla, wordpress).",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1509165,
  "status": "passed"
});
formatter.after({
  "duration": 352682,
  "status": "passed"
});
formatter.before({
  "duration": 6448591,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 24379435,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705081105,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Select a tag to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---found-information;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "i click in a search \"Android\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "on profile card\u0027s \"Luis\" content adjusts automatically with the \"Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....\" found related with the tag selected",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Android",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 66944428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 19
    },
    {
      "val": "Web programmer in Yachay E.P.. Development of web applications, web services, web apps. \u0026 Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....",
      "offset": 65
    }
  ],
  "location": "StepdefsSearchProfileCard.onProfileCardSContentAdjustsAutomaticallyWithTheFoundRelatedWithTheTagSelected(String,String)"
});
formatter.result({
  "duration": 1763414,
  "status": "passed"
});
formatter.after({
  "duration": 241653,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"\u003ctag\u003e\" on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"\u003cspeaker\u003e\" that dont have information and show a \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;",
  "rows": [
    {
      "cells": [
        "tag",
        "speaker",
        "message"
      ],
      "line": 38,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;1"
    },
    {
      "cells": [
        "Joomla",
        "Emanuel",
        "No information found"
      ],
      "line": 39,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;2"
    },
    {
      "cells": [
        "Joomla",
        "Gabriel",
        "No information found"
      ],
      "line": 40,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;3"
    },
    {
      "cells": [
        "Android",
        "Emanuel",
        "No information found"
      ],
      "line": 41,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;4"
    },
    {
      "cells": [
        "Android",
        "Gabriel",
        "No information found"
      ],
      "line": 42,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;5"
    },
    {
      "cells": [
        "Web",
        "Gabriel",
        "No information found"
      ],
      "line": 43,
      "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4158019,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 19778696,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704645384,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Joomla\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Emanuel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joomla",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 109920418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1684574,
  "status": "passed"
});
formatter.after({
  "duration": 355482,
  "status": "passed"
});
formatter.before({
  "duration": 6373016,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 24448479,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704374806,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Joomla\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Gabriel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joomla",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 64764885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1514763,
  "status": "passed"
});
formatter.after({
  "duration": 425459,
  "status": "passed"
});
formatter.before({
  "duration": 6617002,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 24039347,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704428456,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Android\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Emanuel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Android",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 65067651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1225993,
  "status": "passed"
});
formatter.after({
  "duration": 190337,
  "status": "passed"
});
formatter.before({
  "duration": 3381743,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 17515648,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703384869,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Android\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Gabriel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Android",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 60190271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1422861,
  "status": "passed"
});
formatter.after({
  "duration": 362013,
  "status": "passed"
});
formatter.before({
  "duration": 6777482,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 20537711,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704809595,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Select a tag to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;select-a-tag-to-search-profile-card-information---dont-found-information;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "i click in a search \"Web\" on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "profile card content of the \"Gabriel\" that dont have information and show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Web",
      "offset": 21
    }
  ],
  "location": "StepdefsSearchProfileCard.iClickInASearchOnTopOfThePage(String)"
});
formatter.result({
  "duration": 61084108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 29
    },
    {
      "val": "No information found",
      "offset": 77
    }
  ],
  "location": "StepdefsSearchProfileCard.profileCardContentOfTheThatDontHaveInformationAndShowA(String,String)"
});
formatter.result({
  "duration": 1532957,
  "status": "passed"
});
formatter.after({
  "duration": 343820,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"\u003ckeyword\u003e\" in the search bar on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"\u003cspeaker\u003e\" adjusts automatically with the \"\u003cinformation\u003e\" found related to the words searched",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;",
  "rows": [
    {
      "cells": [
        "keyword",
        "speaker",
        "information"
      ],
      "line": 49,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;1"
    },
    {
      "cells": [
        "Ecuador",
        "Luis",
        "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies...."
      ],
      "line": 50,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;2"
    },
    {
      "cells": [
        "game",
        "Gabriel",
        "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol..."
      ],
      "line": 51,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;3"
    },
    {
      "cells": [
        "raspberry",
        "Emanuel",
        "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w..."
      ],
      "line": 52,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4299838,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 20040876,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705028390,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"Ecuador\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"Luis\" adjusts automatically with the \"Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....\" found related to the words searched",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ecuador",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 98628502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 33
    },
    {
      "val": "Ibarra Tourism App: Android Tourism App builded with Apache Cordova and web technologies....",
      "offset": 71
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String,String)"
});
formatter.result({
  "duration": 1482108,
  "status": "passed"
});
formatter.after({
  "duration": 316762,
  "status": "passed"
});
formatter.before({
  "duration": 6583413,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15530640,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702524154,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"game\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"Gabriel\" adjusts automatically with the \"Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...\" found related to the words searched",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "game",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 60919895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 33
    },
    {
      "val": "Evolution of Virtual Creatures: The developed application allows to evolve the form and behaviors of virtual creatures. To this end a genetic algorithm has been implemented that evol...",
      "offset": 74
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String,String)"
});
formatter.result({
  "duration": 1076242,
  "status": "passed"
});
formatter.after({
  "duration": 251916,
  "status": "passed"
});
formatter.before({
  "duration": 4356753,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 21515985,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 704238585,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Write keyword to search profile card information - Found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "i write \"raspberry\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the profile card content of the \"Emanuel\" adjusts automatically with the \"Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w...\" found related to the words searched",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raspberry",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 63045323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 33
    },
    {
      "val": "Silent Television: This work aims at creating a product which would allow the users of a commercial space to hear the sound of a television in that space even if there w...",
      "offset": 74
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheAdjustsAutomaticallyWithTheFoundRelatedToTheWordsSearched(String,String)"
});
formatter.result({
  "duration": 2047986,
  "status": "passed"
});
formatter.after({
  "duration": 365279,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"\u003ckeyword\u003e\" in the search bar on top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"\u003cspeaker\u003e\" that dont have information for the keyword searched show a \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;",
  "rows": [
    {
      "cells": [
        "keyword",
        "speaker",
        "message"
      ],
      "line": 59,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;1"
    },
    {
      "cells": [
        "Ecuador",
        "Emanuel",
        "No information found"
      ],
      "line": 60,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;2"
    },
    {
      "cells": [
        "Ecuador",
        "Gabriel",
        "No information found"
      ],
      "line": 61,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;3"
    },
    {
      "cells": [
        "game",
        "Emanuel",
        "No information found"
      ],
      "line": 62,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;4"
    },
    {
      "cells": [
        "game",
        "Luis",
        "No information found"
      ],
      "line": 63,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;5"
    },
    {
      "cells": [
        "raspberry",
        "Gabriel",
        "No information found"
      ],
      "line": 64,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;6"
    },
    {
      "cells": [
        "raspberry",
        "Luis",
        "No information found"
      ],
      "line": 65,
      "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7094244,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15197085,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703463243,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"Ecuador\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Emanuel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ecuador",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 63779612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 1479775,
  "status": "passed"
});
formatter.after({
  "duration": 381606,
  "status": "passed"
});
formatter.before({
  "duration": 6547491,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 34711269,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705389004,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"Ecuador\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Gabriel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Ecuador",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 55970207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 989005,
  "status": "passed"
});
formatter.after({
  "duration": 217861,
  "status": "passed"
});
formatter.before({
  "duration": 4175279,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 18798089,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 702477970,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"game\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Emanuel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "game",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 62126762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Emanuel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 1377143,
  "status": "passed"
});
formatter.after({
  "duration": 339154,
  "status": "passed"
});
formatter.before({
  "duration": 6200874,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 51944678,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 705187003,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"game\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Luis\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "game",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 65983413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 99
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 1895437,
  "status": "passed"
});
formatter.after({
  "duration": 357815,
  "status": "passed"
});
formatter.before({
  "duration": 6684180,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 18173896,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 701975071,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"raspberry\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Gabriel\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raspberry",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 53933883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gabriel",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 102
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 781407,
  "status": "passed"
});
formatter.after({
  "duration": 181006,
  "status": "passed"
});
formatter.before({
  "duration": 3371946,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "that i\u0027m on the landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page finishes loading",
  "keyword": "When "
});
formatter.match({
  "location": "StepdefsLandingPage.thatIMOnTheLandingPage()"
});
formatter.result({
  "duration": 15574026,
  "status": "passed"
});
formatter.match({
  "location": "StepdefsLandingPage.thePageFinishesLoading()"
});
formatter.result({
  "duration": 703894766,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Write keyword to search profile card information - Dont found information",
  "description": "",
  "id": "search-in-speaker-profile;write-keyword-to-search-profile-card-information---dont-found-information;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "i write \"raspberry\" in the search bar on top of the page",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the profile card content of the \"Luis\" that dont have information for the keyword searched show a \"No information found\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "raspberry",
      "offset": 9
    }
  ],
  "location": "StepdefsSearchProfileCard.iWriteInTheSearchBarOnTopOfThePage(String)"
});
formatter.result({
  "duration": 65553756,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luis",
      "offset": 33
    },
    {
      "val": "No information found",
      "offset": 99
    }
  ],
  "location": "StepdefsSearchProfileCard.theProfileCardContentOfTheThatDontHaveInformationForTheKeywordSearchedShowA(String,String)"
});
formatter.result({
  "duration": 746419,
  "status": "passed"
});
formatter.after({
  "duration": 171210,
  "status": "passed"
});
});