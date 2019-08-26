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
  - body: >-
      We redid last week’s joule heating experiment making some adjustments to
      it. Initially, we setup our experiment by a design which was suggested to
      us by Professor Sivo, however, we struggled to get simultaneous readings
      for the voltage and amperage with the 2 multimeters we were using. So we
      altered our design to measure each electrical quantity separately and
      noticed that our readings for current and voltage were the same as the
      values shown for each on the Programmable DC Power Supply. We then
      reverted back to our original experimental design using the metal
      alligator clip stand, only this time we insulated the clips by wrapping
      them with black electrical tape and we placed the additional alligator
      clips in between the clips of the metal stand. This time we were able to
      record increases in temperature when we supplied more voltage to the
      circuit. It's fair to note that the sharper temperature increases may have
      been aided by us moving the thermocouple across the Nichrome wire which
      consequently induced friction.
    date: 2019-07-22T17:47:16.674Z
    title: 'Week 10 '
  - body: >-
      We realized that using the variability of the resistance of the nichrome
      there may be a way to use the wire itself as a means to measure
      temperature. We began to run a joule heating experiment for the Nichrome
      wire to measure its current and voltage and calculate its resistance as a
      function of temperature. We encountered some difficulties in recording the
      temperature of the wire and observed 2 main factors which affected our
      results. First, the metal alligator clip stand which we used to hold the
      wire in place conducts electricity as well as heat, thus shorting the
      circuit. Second, our experiment setup was in an uninsulated environment,
      making the wire susceptible to greater heat loss.


      ![](/img/screen-shot-2019-08-26-at-1.46.18-pm.png)
    date: 2019-07-15T17:45:43.455Z
    title: 'Week 9 '
    image: /img/screen-shot-2019-08-26-at-1.46.49-pm.png
  - body: >-
      We found a method to calculate the thermal conductivity. The method is
      called transient hot wire.


      ![](/img/screen-shot-2019-08-26-at-1.43.48-pm.png)


      We also wrote an arduino program that, using a thermistor, was able to
      measure temperature over time. Unfortunately, the thermistor was somewhat
      slow to adjust temperatures as it was polymer coated so it was interfering
      with our measurements. We then tried to find a way to use a thermocouple
      we had with arduino, but were missing some components. So, we decided to
      use a phone camera and our multimeter to record measurements of
      temperature over time by taking a video of the multimeter during the
      experiments.


      After consulting with Professor Haldo, we began to employ the equation


      ![](/img/screen-shot-2019-08-26-at-1.44.59-pm.png)


      With this we hoped to determine the temperature coefficient of resistance
      for Nichrome based on the diameter and length of the wire we have. Through
      research from a multitude of sources we found the general acceptable value
      of α is approximately 4.0 x 10-4. Our independent calculations, however,
      yielded negative values.
    date: 2019-07-08T17:43:23.847Z
    title: 'Week 8 '
  - body: >-
      The group debated about the cooling liquid which will be used inside of
      the veins. After some discussion, we decided to use water. We realized
      that the blood replacement fluid did not have to be dielectric, as having
      veins that are was enough to ensure no shortages in our circuitry. 


      We began revising our equations which we were using to calculate the
      heating of the Nichrome wire and its heat lost in air. We realized that
      the equations we made were largely over simplified. Seeing how the figures
      we obtained were calculated with no experimental analysis, we realized the
      margin of error was far too high making them unacceptable for our highly
      stringent application. 


      We tried to source the materials to test the thermal conductivity of the
      eco flex silicone rubber. Unfortunately, due to a limited budget, we could
      not get some of the devices we needed. So, we began trying to create them
      ourselves from materials we need. We also began looking at other means of
      testing thermal conductivity in hopes of finding one that works for our
      budget. We even stumbled on an article detailing how some researchers were
      able to use the eco flex silicone rubber to make more thermally conductive
      elastomers by using a gallium-indium alloy infusion. We, however, still
      need to confirm the thermal conductivity of our material to insure
      accuracy in our final product.


      Lastly, we were able to resolve the communication issue between our
      arduino program and a computer. Now, our GUI controls the intensity of the
      LED light built into our arduino.


      ![](/img/screen-shot-2019-08-26-at-1.42.29-pm.png)
    date: 2019-07-01T17:41:16.866Z
    title: 'Week 7 '
  - body: >-
      We started researching filler materials. We, with the help of Dr. Sivo,
      designed an experiment to test the thermal conductivity of a form of
      silicone rubber we have and would like to use.


      We also started trying to interface our GUI with an arduino in order to
      test our control mechanism. We are creating an Arduino program that would
      receive an integer over the serial port and a Java method that would send
      a numerical representation of the GUI set angle over the serial port. We
      have the basic design done, but we are trying to troubleshoot some
      communications issue between the two programs.
    date: 2019-06-24T17:40:41.041Z
    title: 'Week 6 '
  - body: >-
      After much deliberation, and we decided to use water as our blood. We
      wanted something that would be dielectric so that it wouldn't interfere
      with our electrical systems, but unfortunately, we couldn't identify a
      dielectric coolant that had nearly the cooling properties of water. So, we
      intend to place even higher requirements on the tubing, making sure that
      it does not conduct electricity.


      We also decided to include a filler material around our fibers to transfer
      the heat quicker than air. We will begin researching possible materials
      next week, but we already have a material that we hope may work.
    date: 2019-06-17T17:39:38.643Z
    title: 'Week 5 '
  - body: >-


      The team finished the Filastruder assembly by 3D printing and installing
      the hopper. The file was given along with the assembly instructions for
      the Filastruder. 


      ![](/img/screen-shot-2019-08-26-at-1.35.34-pm.png)


      The team is also designing a cover, shown below, for the stall protection
      board since it is currently exposed. 


      ![](/img/screen-shot-2019-08-26-at-1.36.14-pm.png)


      The team will then 3D print the cover in the near future. 


      On another note, the team then began creating more nylon TCP by using a
      hand drill and coiling nylon fishing line. The team created an apparatus
      to allow us to hold the TCP after coiling as well as double as a
      designated storage space for the tools used in coiling. 


      ![](/img/screen-shot-2019-08-26-at-1.37.05-pm.png)


      We also found that issues with misplaced resources due to the move were
      more extensive than initially predicted. So, we talked with other groups
      and the STEM scholars’ director’s office to locate the program’s
      materials, establish what we had, and identify what the program may
      benefit from acquiring. We created two online documents, one is a list of
      things that we need to locate and make commonly available, and the other
      is a list of projects and their inventory of tools that they may be
      willing to share.


      We also began researching the pumping system and skin materials.
    date: 2018-06-12T00:29:29.040Z
    title: Week 4
    image: ''
  - body: >-
      At the beginning of the week, the team researched alternative materials
      for use in the heating element coating. First, the team took a second look
      at the conductive silver paint used by other researchers such as from MIT.
      The paint they used was a combination of silver pigment in a polyvinyl
      resin. Therefore, our first look into alternative materials were more
      capable polyvinyl resins (other than Elmer's glue). While the team did
      find other polyvinyl resins, the material has a lower than required
      working temperature. Therefore, using it as a heating element to actuate
      nylon may have adverse effects and lead to accelerated degradation of the
      coating. 


      The team then looked into solvents and materials closely related to the
      TCP material. Meaning, the team looked at a solvent for nylon and a
      solvent for LLDPE (the intended actuator used for the actual arm). First,
      the team looked into the chemical resistance of nylon and LLDPE and looked
      for an adequate solvent —one that is relatively less caustic to use and
      also readily available. However, this proved to be a challenge finding a
      suitable solvent for nylon since many forms of nylon are chemically
      resistant to common solvents such as acetone. However, what was found was
      that a certain subtype of nylon 6 called Elvamide can be dissolved in
      ethanol and methanol. Future testing of this material along with an
      ethanol solvent will hopefully be done later this summer. 


      As for a suitable LLDPE solvent, literature shows that acetone can
      dissolve polyethylene at increased temperatures. Preliminary testing of
      acetone and polyethylene at room temperature was conducted by the team but
      showed no signs of dissolving. Further testing at increased temperatures
      should be tested. It is also noted that the acetone used was from nail
      polish remover, thus the concentration of acetone was not pure. An
      alternative to acetone found is Xylene, which is a cheap, commonly used
      paint stripper and can be bought at home improvement stores. Further
      testing is required to determine whether it is suitable for our usage. 


      Once the team has a suitable plastic w/ solvent mixture, testing with
      various graphite concentrations within the mixture can resume. 


      The team also put together the Filastruder needed to create our own LLDPE
      filament as well as recycle print waste from all projects that use the 3D
      printer. 


      * Figure 5. Filastruder assembled


      ![](/img/screen-shot-2019-08-26-at-1.32.22-pm.png)


      We also continued to try to source materials and attempted to test what
      systems we do have. We, however, found that some complications have arisen
      due to the recent move to the new STEM center, leading to tools and
      equipment being misplaced. So, we began to work to locate said tools and
      equipment.


      In addition, We spent some time preparing for the presentation we had on
      Thursday. We reiterated the main aspects of the work thus far to the new
      members. We also practiced our presentations and gave each other feedback
      to improve individual presentation skills.


      We contacted suppliers to find the coolants. We collected data of coolants
      (physical and chemical properties) that we found and put it in the data
      table (Figure06). One issue is some suppliers and manufacturers don’t
      provide all information that we need to know about the oil. As a Result,
      parts of the data table are without some information (Figure 07). They
      still an option because of the boiling point, and viscosity. 


      ![](/img/screen-shot-2019-08-26-at-1.33.50-pm.png)
    date: 2019-06-04T00:24:12.993Z
    title: Week 3
    image: ''
  - body: >-
      We finished writing the GUI. We uploaded the main branch to GitHub using
      the account patrick1964 so that any modifications may be version
      controlled. We also continued trying to source some LLDPE and PET by
      contacting some suppliers. The issue we are running into is that, while
      the material is very common, most suppliers of the raw material sell using
      units of metric tons. So, we contacted them to ask if they would be
      willing to supply such small quantities. 


      The team also continued working on developing a conductive coating. The
      next mixture tested was Bombay Black ink with graphite powder mixed in
      solution. The graphite was mixed with the same percentages used with the
      Elmers glue and graphite mixtures. A surprising result was that the
      control sample of just the Bombay Black ink proved to be conductive but
      with very high resistance —along the lines of 1.5 to 3 K ohms. The first
      mixture tested was 1 ml Ink to 0.04g graphite powder; this solution proved
      to be the least resistant out of all ink/graphite mixtures tested with a
      resistance approximately 0.7 M ohms. What was also a surprise is that the
      next large percentage tested, 0.08g graphite to 1ml ink, had resistance
      values around 30 to 120 K ohm. Then as the amount of graphite in solution
      is increased per sample, the resistance lowered down to around 5K Ohms. 


      * Figure 3 and 4. Bombay Black Ink with graphite mixture


      ![](/img/screen-shot-2019-08-26-at-1.25.55-pm.png)


      ![](/img/screen-shot-2019-08-26-at-1.25.49-pm.png)


      All samples tested proved to have a consistent and thin layer. More
      importantly, all samples had excellent adhesion to the plastic tape
      backing. Abrasion resistance should be tested more thoroughly, however,
      the team noted that the higher concentration of graphite samples had
      visible residue when abraded onto another piece of paper to test for
      abrasion resistance. 


      * Figure 5. Completed simple GUI


      ![](/img/screen-shot-2019-08-26-at-1.27.41-pm.png)


      We did more research about different coolant that we can use for cooling.
      we created a data table (Figure 6 ) that we intend to populate with data
      relevant for the coolant. The data table has information about the
      physical and chemical properties of the coolant. We need to know this
      information before deciding if it is a good coolant for cooling our
      system. 


      ![](/img/screen-shot-2019-08-26-at-1.29.55-pm.png)
    date: 2019-05-28T00:19:12.542Z
    title: 'Week 2 '
    image: ''
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
    date: 2019-05-20T19:11:16.038Z
    title: 'Week 1 '
    image: ''
  - body: >-
      Last week  Anthropomorphic robotics team receive their supplies sample of
      tubing (Figure 11)and the Polyethylene Linear Low Density (Figure
      12).            


      ![](/img/screen-shot-2019-08-26-at-1.48.56-pm.png)


      After getting the hot plate we conducted some tests to measure the thermal
      conductivity of some of the more flexible tubing samples that we have. We
      had issues with the shape as most of the tests require either a solid
      block of material or a film of it, so we had to split the tubes and try to
      straighten them into a rectangular block. We also had to devise a means of
      insulating them and then applying sufficient pressure to ensure they
      remain straight. We did this by cutting a piece of styrofoam for
      insulation and building a stand with a tightenable screw that would hold
      the sample down.


      We also attempted to make use of the hot plate in our heating experiment
      of the Nichrome wire. We did this by using the electrical tape on the
      Nichrome wire we adhered it onto the hot plate and were thus able to
      insulate it. We taped the thermocouple in with the Nichrome wire on the
      plate as well to enable it to read the wire’s temperature as we heated it.
      As we performed our experiment, we noticed a disparity between the
      temperature we set on the hot plate and the temperature recorded by the
      thermocouple. While the wire’s recorded resistance was steadily increasing
      with temperature, the disparity between the hot plate’s set temperature
      and the temperature recorded on the thermocouple grew larger. We were very
      perplexed as to what the error could possibly be; either, the hot plate
      was inaccurate, the thermocouple we used was inaccurate or both equipment
      were inaccurate. This hindered us from using the results we obtained to
      correctly determine the value α of the wire. 


      ![](/img/screen-shot-2019-08-26-at-1.49.53-pm.png)
    date: 2019-07-29T17:47:55.475Z
    title: 'Week 11 '
---

