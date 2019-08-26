---
templateKey: projectTemplate
title: Dirac Electron in IrGa and Magnetism in FeGa
image: /img/comp-mats.jpg
abstract: >-
  The goal of our project is to find new semiconducting materials through
  simulating electronic behavior in new theoretical materials. Essentially, we
  are looking for a replacement for silicon that can be used in microchips and
  tuned to fit different needs and specifications. We use a simulation software
  called Wein2k, which uses Density Functional Theory, a method which solves the
  mathematical equations from the ground up that define how electrons behave.
  The simulation generates data about the electron behavior (particularly, the
  Density of States and the Bandstructure) which tell us all sorts of things
  about how the material will behave in the physical world. Join us on a journey
  through quantum mechanics, solid state physics, and materials science as we
  look into electron behavior in materials that has never been seen before!
meeting: 'Monday-Thursday: 10am-12am, 1pm-2pm'
students:
  - email: dgordon@me.bergen.edu
    name: David Gordon
  - email: jeanpierrealvarez96@gmail.com
    name: Jean-Pierre Alvares
mentors:
  - email: haldolaarachchige@gmail.com
    name: Dr. Neel Haldolaraachchige
blog:
  - body: "We started the day by working on simulating changes in pressure conditions around the IrGa lattice. This is done by changing the volume of the unit cell in small increments (about 1% of the unit cell's total volume) and running the simulation again and again using each new variation to examine changes in the density of states and the bandstructure. Why is this important? Thanks to Boyle's law, we know that a change in pressure always corresponds with a change in volume. Since pressure is a physical value that can be easily adjusted in the real world, we know that any change in volume corresponds to a real, physical parameter which can be easily tuned. Therefore, if we find that altering the volume has some useful effect (for example changing the Fermi energy), then we know that this makes our potential material more flexible to fit different needs and specifications. This is part of an area of materials science known as \"band tuning.\"\r\n\nThe structural aspect of this process was completed today. The unit cell of IrGa was edited in vesta, and 10 .cif files were exported. Since the original volume of one IrGa unit cell is 27.108 Å3 , each subsequent .cif file has a volume .27108 Å3 smaller than the previous.\r\n\nBelow are images from VESTA of the first two iterations of this process:\n\n![](/img/screen-shot-2019-08-26-at-2.48.11-pm.png)\n\n![](/img/screen-shot-2019-08-26-at-2.48.39-pm.png)\n\nThe day was ended with a student-led lecture on band theory, and the meaning of bandstructure and Density of States. \n\n![](/img/screen-shot-2019-08-26-at-2.50.14-pm.png)\n\n![](/img/screen-shot-2019-08-26-at-2.50.22-pm.png)\n\nThe other goal for this week is to conduct literature review regarding phases of FeGa. \n\n**Definitions for this entry:** \r\n\n* **Lattice** - the pattern in which the atoms are arranged in the overall crystal structure. \r\n\n\\*note: in the context of crystals, a lattice is almost always considered to have some sort of translational symmetry\r\n\n* **Unit Cell** - one single iteration of atoms making up the overall pattern of the lattice. These can be simple cubes or large complex structures, but the important thing is that they all share the same basis. \r\n* **Fermi Energy** - the energy level at which electrons escape the valence band and enter the conduction band\r\n* **.cif files** - files which contain structural information about the unit cell\r.\n* **Bandstructure** – graph of electron energy levels vs. momentum space. These graphs tell us the paths that electrons are taking through the unit cell, and their corresponding energy levels. Each point on the x-axis corresponds to a point in the unit cell (see figure 3).\r\n\n\\*note: the “point” that the bandstructure graphs correspond to are not actual locations. This is thanks to the Heisenberg uncertainty principle, which states that we cannot know both the position and velocity of an electron at the same time. Therefore, these graphs occur in what is known as “momentum space.” But don’t worry too much about this! For the purposes of the reader, we can think of it as physical locations.\r\n\n* **Density of States** – graph of the number of electron states vs. energy level. These graphs tell us how many different electron states can occupy a particular energy level."
    date: 2019-06-03T12:11:04.738Z
    title: 'Week 1 '
    image: ''
---

