---
templateKey: projectTemplate
title: Anthropomorphic Robotic Arm
image: /img/robot-arm.jpeg
abstract: >-
  The goal of our project is to develop an anthropomorphic robotic arm which
  closely mimics the functions and capabilities of an average human arm. Through
  literature reviews and results verification, we have found that LLDPE, UHMWPE,
  PET, and polycarbonate could be used as replacements for muscle, cartilage,
  ligament, and bone respectively.
meeting: 'Monday -Thursday , 10-12 and 1-3'
students:
  - email: alexmariecortez@gmail.com
    name: Alexandra Cortez
  - email: phanna@me.bergen.edu
    name: Patrick Hanna
  - email: capalbot18@gmail.com
    name: Tommy Capalbo
  - email: rpjtalingdan@gmail.com
    name: Jan Mark Talingdan
  - email: jsouza108272@me.bergen.edu
    name: Marcos Souza
  - email: fchekeche@me.bergen.edu
    name: Farai Chekeche
mentors:
  - email: bbenjamin@bergen.edu
    name: Dr. Benjamin
blog:
  - body: "The most manageable means of powering the actuator was deemed to be electrothermal heating. Electrothermal heating is the conversion of electric energy to thermal energy for the purpose of producing heat. This is done by running an electric current through a resistor and that leads to the resistor heating up. a common example of a resistor is a copper wire.\r\n\n\r\n\nAfter deciding on the heat source, it was time to work on fabricating the material. So, we started looking into means of applying the twist to the string. To do so, we decided to find an elevated platform on which we plan to attach an electric drill with a hook as the drill bit. Then, we would tie the ends of the fiber onto paper clips. one paper clip would be placed onto the hook, and the other would have a rotationally fixed weight placed on it.\r\n\n\r\n\nWe completed that setup and tested it by producing a sample twisted polyethylene fiber."
    date: 2018-06-15T00:29:29.040Z
    title: Week 4
    image: /img/anthro-week-4.jpg
  - body: "As stated last week, work on GUI has started. The process of placing and labeling the joints for the expected movement of the bones at joints was fairly complicated at first. Once a joint is a placed, the bones will be allowed to move in all three axes: x, y, and z. Now, the team had to figure out how to put limitations on the degrees of rotation or movement for each bone in the design. While placing the joints, the team learned that they must be placed inside one of the bones at the joints, for the bones to not overlap each other during the motion.\r\n\n\r\n\nAlongside, more research on Linear Low-Density Polyethylene (LLDPE), the substance to be used in making the artificial muscle has been done over the week. This polymer has high elasticity and low water absorption. This substance can be easily stressed and will not break when heated as important for our project. To contract the artificial muscle fibers, required heat must be supplied. Through our research, we learned that LLDPE generates strain as high as 23% at 90° C.\r\n\n\r\n\nMeanwhile, research on the heat source has just begun. Updates on the research will be provided in the next blog."
    date: 2019-05-27T00:24:12.993Z
    title: Week 3
    image: /img/bergen-stem-graphic.jpg
  - body: "Previously work uncovered the possibility of utilizing nylon as a synthetic muscle. However, the articles found suggested that the nylon may require temperatures exceeding 170 degrees Celsius to match the biological function that it would mimic. Thus, farther research was deemed necessary. This week, more in-depth research into polymer usage as artificial muscles was conducted. Polyethylene was the material of focus. An analysis suggests that Linear Low-Density Polyethylene, or LLDPE, may be a more efficient alternative to the nylon. It would require temperatures at a maximum of one hundred degrees Celsius to achieve results matching the biological functions. This difference is desirable because it will lead to lower energy requirements, and cause fewer issues for any complimentary material. Many other polyethylene compounds also require a lower temperature for similar performance than the nylon compounds. Thus, alongside the nylon, polyethylene will be tested.\r\n\n\r\n\nAlong with the research, work on the graphical user interface, or GUI (also used for general user interface), has started. The GUI was envisioned to be an anatomically accurate human arm that could be manipulated to manipulate the robotic arm. The first obstacle to overcome was finding a development software. It is unfortunate that no one on the team is proficient in any 3D modeling and animation software. Thus, research into possible software was required. After assessing numerous programs including unity, SolidWorks, and AutoDesk's fusion, AutoDesk's Maya was ultimately selected. Then, the process of learning the software and using it started. Fortunately, a usable skeleton model was found to provide a starting point for the GUI. The following image is the current state of the GUI.\n\n\n\nTo read more regarding the nylon and polyethylene synthetic muscles, view these links:\n\n<https://www.polymersolutions.com/blog/artificial-muscles-from-cheap-polymer-fibers/>\n\n<https://www.nature.com/articles/srep36358>"
    date: 2018-06-05T00:19:12.542Z
    title: Furthering the research and starting to interface
    image: /img/anthro-week-2.jpg
  - body: >-
      We started looking into different languages and IDEs to create a simple
      GUI to test single muscle fibers or muscle groups. Eventually, we settled
      on using Java with the Eclipse IDE. Java’s AWT and swift libraries in
      association with Eclipe’s window builder will help make the build easier.
      We also welcomed two new members to the project and caught them up to our
      progress. 


      We also began research on coolant liquids for the cooling system. The
      coolant liquid cannot conduct electricity and it needs to have a higher
      boiling point than expected heat element temperature. we found that two
      common dielectric coolants are silicone oil and mineral oil. They are used
      to cool down transformers. Further research is required to determine
      whether or not we can use them.


      The team also worked on developing an adequate heating element which will
      coat the nylon (and in the future: LLDPE) actuators. Heating element
      coating must be flexible enough to withstand constant compression and
      movement due to actuation of the TCP. Furthermore, the coating must be
      electrically conductive and withstand high temperatures --upwards of 200C
      due to nylon actuates around that temperature. The team started with
      Elmer's glue which is a polyvinyl acetate glue. The Elmers glue is mixed
      with varying amounts of graphite powder (measured in grams from 0g to 0.7g
      of powder in 0.1g increments). The team then conducted a smear test, as
      seen in figure 1, with every sample by applying a small amount onto a
      piece of paper lined in plastic tape and then, using a squeegee, smearing
      the sample to a uniform and flat layer. All samples were tested twice with
      a thinner layer and a thicker layer to determine whether layer thickness
      contributes to adhesion and flexibility. The samples were dried and then
      tested for conductivity using a multimeter. The team found that a sample
      mixture of Elmer's glue with 2.5mL glue to 0.6g graphite powder is
      conductive. Mixtures lower than 0.6g graphite powder were deemed
      non-conductive and mixtures with over 0.7g graphite powder were
      conductive. However, the mixture of Elmer’s glue and 0.6g graphite powder
      showed the highest adhesion and flexibility among the conductive samples
      most likely due to the lower amount of graphite mixed in. Furthermore, a
      thinner layer of the sample proved to be much more resilient than the same
      sample applied at a larger thickness; this property should be tested much
      more thoroughly once an ideal material is found. 


      Figure 1: Smear test of graphite and elmers glue mixture


      ![](/img/screen-shot-2019-08-26-at-1.20.38-pm.png)


      Figure 2. Graphite Glue mixtures


      ![](/img/screen-shot-2019-08-26-at-1.20.45-pm.png)


      Figure 3. Beginnings of the simple GUI


      ![](/img/screen-shot-2019-08-26-at-1.20.55-pm.png)
    date: 2018-05-20T19:11:16.038Z
    title: Research stage
    image: /img/bergen-stem-graphic.jpg
---

