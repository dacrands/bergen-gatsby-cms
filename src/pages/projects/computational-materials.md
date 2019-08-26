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
  - body: >-
      Today I realized there was a substantially more efficient method to
      calculating the band gaps. Since MS paint shows exactly how many pixels a
      certain distance is, if I start on one of the bars and draw a line to the
      gap, then I have a value for pixels which I can divide by the number of
      pixels in the whole bar (222) to obtain a percentage value. 


      For example, if the orange band in the previous picture is 74 pixels from
      the top bar, then we just take 74/222 = 1/3, so we know that it is 1/3 of
      the way across the gap. Since each gap is 0.025 eV, the orange bar ends up
      as 0.025/3 from the top bar, and the total gap ends up being 0.025 -
      0.025/3, or 0.025*(2/3). Following are the results from the computational
      stress test.


      ![](/img/screen-shot-2019-08-26-at-3.29.24-pm.png)


      We now have one more piece of data which experimentalists who read are
      paper will be interested in! However, there is still more to do. It would
      be ideal to plot the gap as a function of pressure rather than just
      volume. Unfortunately, the simple pressure-volume relationship of
      P-1V1=P2V2 does not hold in atomic structures. It is necessary to refer to
      papers which have addressed this issue in the past. One of such papers
      from 1944 has experimental data along with a derivation that stems from a
      modified version of Hooke’s law
      **(https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1078704/?page=3).** We
      will attempt to use this information to calculate how much pressure is
      needed to compress sour structure a specific volume.
    date: 2019-06-17T19:28:40.325Z
    title: 'Week 3 '
  - body: >-
      This day was spent learning about eigenvectors and eigenvalues as well as
      spin pauli matricies. This is necessary in order to prove our Dirac point
      through math. Those unfamiliar with linear algebra may want to skip to the
      next section.


      One major realization made by Jean Pierre and I which is fundamental to
      our work is that within the energy eigenvalue problem (the main
      mathematical description of quantum mechanics), energy is the eigenvalue
      of the wavefunction, and the different paths in k-space are different
      eigenvectors. This was a huge boost to our understanding of quantum
      mechanics and bandstructure graphs! In addition, it gave perhaps the most
      striking application of linear algebra either of us have ever seen.


      In learning about spin eigenvalues, the following video was used:
      **https://www.youtube.com/watch?v=pH2YBNn-Bfo&t=178s.**


      This channel contains a playlist which builds an understanding of quantum
      mechanics from the ground up, while taking it a step further and going
      very deep into the math. Basically, it is an entire beginner/intermediate
      quantum mechanics course, wrapped up in a youtube playlist. I would highly
      suggest it to anyone who is interested in learning the math behind quantum
      mechanics. 


      Today’s goal for IrGa was to take the results of the stress tests and plot
      the gap of the dirac point as a function of the volume (and eventually,
      pressure). This poses a major challenge as there is no way to obtain exact
      energy values for bands on the bandstructure graphs in wein2k. Instead, I
      needed to go through the following procedure:


      I had to start by telling wein2k to only show a very small window for the
      bandstructure. In the following example, the bottom line is -0.2 eV, and
      the top line is 0 eV:


      ![](/img/screen-shot-2019-08-26-at-3.26.22-pm.png)


      Then, it was necessary to break the image up vertically into equal
      sections. This was done by measuring the image height from the bottom line
      to the top in pixels, dividing that by 8 (in our case), and then making 8
      vertical bars that are separated by the calculated pixel value. The result
      looks like this:


      ![](/img/screen-shot-2019-08-26-at-3.27.04-pm.png)


      Now we know that each vertical bar is exactly an energy value of 0.2/8 eV
      from the last, or 0.025 eV. The bars were then selected as a whole and
      moved so they lined up with one of the ends of the bands. Since the other
      band is not exactly on the next bar, it was necessary to break up that
      spacing by halves (using the same method as above) until it landed on a
      subdividing bar. The result is then calculated depending on the situation,
      but generally using some variation of the following formula:


      ![](/img/screen-shot-2019-08-26-at-3.27.51-pm.png)
    date: 2019-06-10T19:25:34.366Z
    title: 'Week 2 '
  - body: "We started the day by working on simulating changes in pressure conditions around the IrGa lattice. This is done by changing the volume of the unit cell in small increments (about 1% of the unit cell's total volume) and running the simulation again and again using each new variation to examine changes in the density of states and the bandstructure. Why is this important? Thanks to Boyle's law, we know that a change in pressure always corresponds with a change in volume. Since pressure is a physical value that can be easily adjusted in the real world, we know that any change in volume corresponds to a real, physical parameter which can be easily tuned. Therefore, if we find that altering the volume has some useful effect (for example changing the Fermi energy), then we know that this makes our potential material more flexible to fit different needs and specifications. This is part of an area of materials science known as \"band tuning.\"\n\nThe structural aspect of this process was completed today. The unit cell of IrGa was edited in vesta, and 10 .cif files were exported. Since the original volume of one IrGa unit cell is 27.108 Å3 , each subsequent .cif file has a volume .27108 Å3 smaller than the previous.\n\nBelow are images from VESTA of the first two iterations of this process:\n\n![](/img/screen-shot-2019-08-26-at-2.48.11-pm.png)\n\n![](/img/screen-shot-2019-08-26-at-2.48.39-pm.png)\n\nThe day was ended with a student-led lecture on band theory, and the meaning of bandstructure and Density of States. \n\n![](/img/screen-shot-2019-08-26-at-2.50.14-pm.png)\n\n![](/img/screen-shot-2019-08-26-at-2.50.22-pm.png)\n\nThe other goal for this week is to conduct literature review regarding phases of FeGa. \n\n**Definitions for this entry:** \n\n* **Lattice** - the pattern in which the atoms are arranged in the overall crystal structure. \n\n\\*note: in the context of crystals, a lattice is almost always considered to have some sort of translational symmetry\n\n* **Unit Cell** - one single iteration of atoms making up the overall pattern of the lattice. These can be simple cubes or large complex structures, but the important thing is that they all share the same basis. \n* **Fermi Energy** - the energy level at which electrons escape the valence band and enter the conduction band\n* **.cif files** - files which contain structural information about the unit cell\n  .\n* **Bandstructure** – graph of electron energy levels vs. momentum space. These graphs tell us the paths that electrons are taking through the unit cell, and their corresponding energy levels. Each point on the x-axis corresponds to a point in the unit cell (see figure 3).\n\n\\*note: the “point” that the bandstructure graphs correspond to are not actual locations. This is thanks to the Heisenberg uncertainty principle, which states that we cannot know both the position and velocity of an electron at the same time. Therefore, these graphs occur in what is known as “momentum space.” But don’t worry too much about this! For the purposes of the reader, we can think of it as physical locations.\n\n* **Density of States** – graph of the number of electron states vs. energy level. These graphs tell us how many different electron states can occupy a particular energy level. \n\nIt was observed in the bandstructure of IrGa that there is something called a Dirac point. This is essentially a point in the unit cell where electrons are moving at velocities up to magnitudes of millions of times higher than everywhere else in the structure. Therefore, special relativity must be taken into account, and the electrons can only be described using something called the Dirac equation (hence the name) and no longer can be described by the Schrodinger equation, which holds for any quantum system that doesn’t contain particles moving at relativistic speeds.\n\nThe discovery of this Dirac point is enough to write a paper and publish it in a journal! However, it is not enough to simply show a graph and say “this is a Dirac point!” We must also prove that the Dirac point exists there theoretically, using the math of quantum mechanics and previous research.\n\n![](/img/screen-shot-2019-08-26-at-3.01.46-pm.png)\n\nBecause of this, I was assigned by our mentor to read the paper “Three-Dimensional Dirac Semimetals: Design principles and predictions of new materials.” Not only would this paper give me more ideas about how to prove that the Dirac point exists in IrGa, but would also help me understand the types of 3D Dirac semimetals, how to search for them computationally, and how they differ from topological insulators and Weyl semimetals (other types of materials with relativistic electrons \\[or to get technical, materials with massless spin- ½  Dirac fermions]). \n\n**Below are the notes I took while reading this paper:**\n\nLiterature Review: Reading \"Three-dimensional Dirac Semimetals: Design principles and predictions of new materials\"\n\n* **Goals: How to look for new Dirac Semimetals**\n\no\tTypes of compounds which produce 3D DSM's\n\no\tWhy Dirac Cones are created\n\n* **3 Types:**\n\no\tCharge balanced dirac semimetals\n\no\torbital degenericies\n\no\tglide planes and screw axes\n\n* **Charge Balanced 3D Dirac semimetals are \"in between\" topological and regular insulators**\n* **Special state where bands are totally insulated except for special points of high symmetry**\n\no\tUsually form in materials with large SOC\n\no\tbands must have different symmetries\n\n•\twhen 2 bands touch, either:\n\no\tavoided crossing > topological insulator\n\no\tavoided crossing > regular insulator\n\no\tcrossing points gap out except for special points along crystal symmetry > 3D DSM\n\n* ^ **These outcomes controlled by \"point group\" symmetry.**\n* **When the gap closes, electronic states must be orthogonal to each other.**\n\no\tHowever, with SOC, orthogonality comes from the \"double group.\" \n\n\tdouble group: Point group that also takes into account that the states are spin-1/2 particles.\n\n\tExample: C2v > irreducible > all states have the same symmetry.\n\n\twithout SOC, C2v has four different irreducible representations. \n\n\tSo, states crossing must have different symmetries in the double group.\n\n\tthis can only exist in C3, C4, and C6 symmetries. \n\no\tAll of this rules out all orthorhombic, monoclinic, and triclininc space groups from being charged balanced 3D Dirac semimetals.\n\n* **For cubic DSMs:**\n\no\tDirac point along gamma-R line, which is along a threefold rotation axis with C3v symmetry.\n\n\tPossible because of band inversion along this line and large SOC (which exists in IrGa!)\n\n\tCan use this as a source when proving our material!!!!\n\n* **Teaching new members**\n\nJean Pierre and I spent a good portion of today teaching new members how to use the Wein2k code to generate DOS (Density of States) and bandstructure graphs. We ran the material Fe3Ga4 for practice, which is a material which Jean Pierre has been focusing on in order to investigate ferromagnetism in the material. We talked through the process while Leike and Nami took notes.\n\n![](/img/screen-shot-2019-08-26-at-3.09.27-pm.png)\n\n![](/img/screen-shot-2019-08-26-at-3.09.35-pm.png)\n\nIn the end, there was an issue with the bandstructure graph (Figure 7). The vertical white space is not supposed to be there. Well, troubleshooting is a large part of the battle in computational physics! Unfortunately, we ran out of time and need to continue tomorrow.\n\n* **Fe-Ga Project:**\n\nRan simulation for Fe3Ga4. Lieke and Nami gained further experience using the wein2k code and we fixed the problem from the previous attempt.\n\n* **Ir-Ga practice:**\n\nOne of our main goals in the first few weeks is to make the new members comfortable with using the wein2k software. To do this, we are running simulations to probe the electronic structures in the Ir-Ga and Fe-Ga systems. Leiki and Nami are working with Jean Pierre on Fe-Ga and Hadeel is working with me on Ir-Ga. Our mentor Dr. Haldolaraachchige wants her to run IrGa, IrGa2, and IrGa3 to review how spin orbit coupling effects these three compounds. \n\nWhile working on the simulation for IrGa2, Hadeel asked an important question.\n\n1. \"What are we really doing here?\"\n2. As in, what is the simulation truly doing? \n\nWe finished the initialization, and while the simulation was running, I did my best to explain.\n\nI explained that the code solves the Kohn-Shahm equations (below) in order to find the wavefunction for the given atomic configuration. \n\n![](/img/screen-shot-2019-08-26-at-3.15.30-pm.png)\n\n* **Well, what is a wavefunction?**\n\nWe went all the way back to the roots of quantum mechanics and the double slit experiment in order to explain that as an electron is flying through space, it exists not as a single particle, but in a superposition of all its possible states and positions. The electron is actually existing as a sort of \"probability wave\" which “collapses” when the electron is forced to “choose” a definitive state (by measurement) This probability wave is defined by the wavefunction, and the solutions (found by wein2k) reveal all the properties of the electrons which we are then able to study! \n\nNotice all the quotes in the above paragraph; they are there because these terms are not entirely accurate, as quantum mechanics is extremely hard to define through language. It is much easier to do so through math, which is where the wavefunction comes into play!\n\nWe used the following resources during this explanation:\n\n**https://www.youtube.com/watch?v=DfPeprQ7oGc**\n\n* Explains the double slit experiment and the wave nature of the electron\n  **https://www.youtube.com/watch?v=p7bzE1E5PMY**\n* Shows a visualization of the wavefunction and how it represents the properties of the electron. \n\nWe also went over and watched a video on Euler's identity, which explains why wavefunctions often take the form of **〖Ae〗^(ik*r)** (where A is a constant, k is the wave vector, and r is the position vector). For more info on this, check out Euler’s identity, but in short for the curious, it is defined as \n\n**eix = cosx + i*sinx.**\n\nI highly suggest anyone who wants to know more about quantum physics and wavefunctions watch those two videos (especially the first for a great overview). They are a quick way to build a very solid foundation of quantum mechanics with no prior knowledge of math or physics necessary.\n\n**Searching for Dirac Materials:**\n\nReading the 3D Dirac Materials article gave me a strong sense of what to look for in IrGa.\n\nEssentially, every dirac point is protected by some sort of symmetry. In charge balanced semiconductors for example, dirac points can only exist where the structure has three-, four-, or six-fold symmetry. In addition, the two bands cannot have the same symmetry. This will be important for figuring out why our material has a dirac point.\n\nIf we can figure out what symmetry is allowing the Dirac point to exist in IrGa, then our work is done and we can claim the discovery of a new Three Dimensional Dirac Semimetal!\n\nI probed the structure by choosing a custom k path:\n\n![](/img/screen-shot-2019-08-26-at-3.19.28-pm.png)\n\nThis let's us see electron behavior along that specific (green) path in reciprocal space. \n\nThe R-point is the corner, and descending down in the list following the order of the arrows yields the locations of the rest of the points.\n\nThen, I ran the bandstructure calculations using that path:\n\n![](/img/screen-shot-2019-08-26-at-3.20.19-pm.png)\n\nAs we can see, the Dirac point in the Fermi energy (aka 0 energy) occurs along the Gamma-R line, closer to the R-point (note: there may be Dirac points at other energy levels, but these are unimportant to us because only electrons near the Fermi energy can be manipulated for applications). \n\nThis is consistent with the information in the 3D DSM article. And indeed, that line does have three-fold rotation symmetry! (as it is the line extending from the corner of the cube through the center)\n\nThese results are consistent with the predictions made by Gibson et. al.\n\nI then changed the k-path and re-ran the bandstructure calculation. This time, I chose the following k-path:\n\n![](/img/screen-shot-2019-08-26-at-3.21.16-pm.png)\n\nAgain, the dirac point only appeared along the Gamma-R line! In addition, I specifically chose a K path that probed the Gamma-R line from both directions, and the dirac point was perfectly symmetrical on both (right side of below image). This shows that the dirac point is likely not anisotropic. \n\n![](/img/screen-shot-2019-08-26-at-3.22.02-pm.png)\n\n* \n\n**Ir-Ga:** \n\nToday I took a step back from figuring out the symmetry of our dirac point to resume the stress calculations. I had to re-run the simulations from the first one, because I did not use enough k-points in the original data.\n\nSo far, I am on the 3rd iteration, and it is observed that the Fermi Energy is increasing slightly with each smaller unit cell.\n\nUPDATE: Now on the 8th iteration. Without SOC, the gap of the dirac point seems to be closing! With SOC, there's no visible difference in the gap. The gap is always smaller without SOC than with.\n\n![](/img/screen-shot-2019-08-26-at-3.23.03-pm.png)\n\nThis week ended on a high note; I found an article which contains the math to prove that a cubic structure must contain Dirac points somewhere along the Gamma-R line! The math is just barely over my head, but I do have enough knowledge of quantum physics, linear algebra, and vector/symmetry operations to understand the derivation upon a lengthy analysis. I will write a quick summary below, but here is a link to the original work here for anyone interested **https://doi.org/10.1016/j.scib.2017.05.014)** \n\nEssentially, the article states that in a cubic structure, if there exists 3-fold rotational symmetry along some axis (that is, you can rotate it 3 times within a 360 degree rotation and it will look identical; think 3-pedaled flower), along with one other component*, then a Dirac point must exist. Since the Gamma-R line travels from the center of the cube to its corner, this line does in fact possess 3-fold rotational symmetry! \n\n\\*Now, to get a bit technical, that other component requires that the bands crossing at this point must have different spin eigenvalues (values which correspond to the spin of the electrons). If we can figure out the eigenvalues of the bands along this line (as was done in the article), we can absolutely prove that a Dirac point exists in IrGa, and we will have the computational results to back it up! This is enough information to publish an article in the Journal of Computational Physics.\n\n* \n\n**Fe-Ga:**\n\nJean-Pierre and the Fe-Ga team is working today on exploring which atoms in particular are contributing to the electronic states around the Fermi energy. This is done by using the partial DOS function in wein2k:\n\n![](/img/screen-shot-2019-08-26-at-3.24.30-pm.png)\n\nUnfortunately, wein2k separates each atom in the unit cell individually. Therefore, it is necessary to use a database tool such as excel to add the DOS from each iteration of the same atom, obtaining the total contribution from Ga and from Fe. The results will then be plotted using IGOR graphing software for a cleaner appearance."
    date: 2019-06-03T12:11:04.738Z
    title: 'Week 1 '
    image: ''
---

