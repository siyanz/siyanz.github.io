---
layout: post
title: Beacon&#58; Decision Aid for COPD Patients
shortinfo: Creating a tool to educate patients about risks and benefits of each treatment for severe Chronic Obstructive Pulmonary Disease (COPD) and help them connect their values and individual circumstances with their treatment choice.
year: 2014
month: January
categories: [UX]
problem: For people with severe COPD, choosing the right treatment can greatly affect their life quality. How can they get clear and credible information on various available treatments and know what works the best for their individual cases?
goal: To create a tool that educates patients about the risks and benefits of the treatment options for severe COPD and help them connect their values and individual circumstances with their treatment choice.
roles:
 - UX Research Lead
methods:
 - Literature Review
 - Competitive Analysis
 - Fly-on-the-wall Observation
 - Interviews
 - Think-alouds
resources:
 - resource: Prototype
   external-url: http://juliat.github.io/copdda/#intro
color: "#ED8054"
preview: /images/Beacon/teaser.png
hero-img: /images/Beacon/hero.png
slideshow:
teammates:
 - name: sZhao
 - name: juliaT
 - name: rAndrews
 - name: amrithaM
---

### Background
Chronic Obstructive Pulmonary Disease (COPD), commonly known as emphysema, limits the ability of a person's lungs to retain oxygen. People with COPD have severe issues with breathing. Many individuals describe their difficult experience as "breathing through a coffee straw". This significantly decreases their quality of life. While there is no cure for COPD, there are two approaches to alleviate the condition: medical treatments (oxygen, bronchodilators, steroids, pulmonary rehabilitation) and a lung transplant. The process of choosing between these two options can be confusing.

In collaboration with University of Pittsburgh Medical Center (UPMC), we worked with Dr. Cynthis Gries to design a decision aid to help patients choose a treatment that best fits their needs and values.

### My Role
As the research lead of the team, I, with my team, interviewed stakeholders, doctors, social workers and caregivers, in the early stage. We also talked to pre- and post-transplant patients to understand their worries and concerns. In the design phase, I lead the team to conduct think-alouds and interviews to test our prototypes.

### Design Timeline
![Project timeline]({{ site.baseurl }}/images/Beacon/timeline.png "Project timeline")

#### Background Research
To better help the patients, we started off by reading existing literatures on COPD, its treatment and reviewing decision aids for other diseases. This was followed by multiple visits to the UPMC to observe COPD information sessions and consulting sessions for patients. We collected a copy of information packet that the hospital hands out to patients, which contains all the information, regarding to the disease, insurance, lung transplant surgery, and after-surgery care, the patients needs to know. Last but not least, we interviewed with stakeholders who were involved in patients' decision making process. Those stakeholders were, but not limited to, caregivers, surgeons and pulmonologists. From the stakeholders, we wanted to get a full picture of what people need and want to know the most in order to make a decision on treatment.
![The official information packet]({{ site.baseurl }}/images/Beacon/packet.jpg "Information packet")

#### Affinity Diagram
We gathered a large amount of information from literature review, observations and interviews. An affinity diagram with all the findings pointed out 3 critical misconceptions that we needed to address in the decision aid. We found that:

* Insight 1: patients think that risks and complications won't happen to them,

* Insight 2: patients trust doctors but also listen to other patients,

* Insight 3: patients consider a lung transplant as their only treatment option.

These three insights were the main focus of our decision aid.

![Affinity diagram with 700 post-its]({{ site.baseurl }}/images/Beacon/affinity.png "This was a 700-post-its affinity diagram. It covered up a whole wall!")

#### Low-Fidelity Prototype
In this prototype, we aimed to test the __overall layout__ and __content structure__. We focused on exploring navigation structures and ways to present information about the treatment options.


##### Guided vs Sidebar.
![Sidebar vs Guided Navigation]({{ site.baseurl }}/images/Beacon/navigation.png "The guided navigation was tested to be more appropraite for the user group.")
We explored two types of navigation. The guided navigation provided patients with all the information in a linear style. Patients would only use "Next" and "Previous" buttons to go through the decision aid. The benefit was that it is easy to use and patients would not miss any important information by skipping through sections.

The sidebar navigation, on the other hand, offered more flexibility to go from section to section. It also signaled the users which section of the decision aid they were on by referring to the menu on the left.

##### Content Presentation.
![Content Presentation]({{ site.baseurl }}/images/Beacon/contentPresentation.png "We used text, videos, and quizes to help patients remember the content they read.")
As COPD constraints patients' oxygen intake, it also limits their attention span. Therefore, it is critical to present information in an engaging and dynamic manner. To achieve this, we tried multiple methods of providing information to the patients. Other than texts, we integrated videos and quiz questions that stressed major takeaway points that the patients should know about for each treatment option (medical treatment vs. lung transplant).

![Scale Metaphor]({{ site.baseurl }}/images/Beacon/scaleMetaphor.png "We used visual scales to help patients evaluate their needs and values")
We also used a scale metaphor that was commonly used in decision aids to visually present pros and cons of two options. Prior to the scale metaphor page, patients had to answer questions about what they valued the most in their lives and what they wanted to get out from the treatment. Depending on what values each treatment could satisfy, we put the values that the patients chose on two sides of the scale, each side representing one treatment option. By visually seeing which side the scale tilts against, patients would have a clearer idea of which treatment would be better for them.

#### Medium-Fidelity Prototype
We built an interactive medium-fidelity prototype using a prototyping tool called Proto.io. During the medium-fidelity phrase, we focused on refining three key elements of the tool: the navigational structure, the interactive elements (i.e., quiz questions, videos, and the scale metaphor), and the content design.

![Interactive Medium-Fidelity Prototype]({{ site.baseurl }}/images/Beacon/med-fi.png "The medium-fidelity prototype")

#### High-Fidelity Prototype
Our high fidelity prototype was a static website, created with the expectation that some of the code might be used in the final product. In high-fidelity prototyping phase, we significantly improved the usability of our navigation, the organization of our content, and the videos in the decision aid. We also structured our decision tool around the 3 insights from our interviews and observations.

##### Insight 1: Risks and complications won't happen to me.
To help patients correct their bias, we created visualizations and used plain English to help patients understand that risks CAN happen to them. We also used photos of real COPD patients to close the mental gap between "others" and "me".
![We used little human icons and patients' images to help patients realize that risks CAN happen to them]({{ site.baseurl }}/images/Beacon/insight1.png)

##### Insight 2: Trust in doctors but also other patients.
We used this insight to its fullest. We found videos of real patients talking about their experiences with each treatment and also made our own videos on potential risks. We sprinkled these videos throughout the decision tool to not only inform patients from other patients' perspectives, but also to better engage the users.
![We inserted many videos of real patients to help the user better understand the treatments]({{ site.baseurl }}/images/Beacon/insight2.png)

##### Insight 3: A lung transplant is my only treatment option
We found in our interviews that it is a common misconception that lung transplant is a patient's only option. For our client, it is critical to inform the patients that there IS another option, i.e., enhancing medical treatment. Therefore, in our design we put equal emphasis on these two treatments. We also intentionally introduced medical treatment first so that it grabs users' attention before they dive into details on lung transplant.
![We put equal emphasis on the two treatments of COPD]({{ site.baseurl }}/images/Beacon/insight3.png)

### Final Delivery
![Final Prototype]({{ site.baseurl }}/images/Beacon/beacon5.gif "The final prototype")
[Click here](http://juliat.github.io/copdda/#intro) to see our final prototype in action.

Our client was very satisfied with the final work and decided to continue on working on the decision aid based on our design and eventually launching it in the near future.
