# Atelier

Steps to create a new branch for work:

    Switch to main branch to update data:
        “Git checkout main”

    Pull data
        “git pull”

    Create a NEW branch
        “git checkout -b branchname main”

    *After committing and work*
    Push to new branch on GitHub
        “git push -u origin branchname”

    *Still stuck? Link to a tutorial:*
    https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow



[Reading] Writing a Compelling README
What is a README?
You've worked hard and built a great application, but now what? You want your code to be available for others to view. You might want employers to see the work you've done. In the open-source community, you will want others to use your code, build upon it, and contribute to it!

However, reading through code in order to understand the project is time intensive. Additionally, the code itself cannot convey everything that others might need to know. A README file is a file that documents your work and outlines important information for anyone who views your project. It is the first impression your project makes.

By convention, the README file should be added to the top level directory of your Git repository. GitHub and other similar sites will look for this file, and actually display it as part of the project's home page. It is often written in Markdown (.md), which quickly structures and formats your text. You can read a Markdown quickstart here  .

What should be included in a README?
What should be included in the README depends on the type of project being documented. However, there is some information that applies to nearly every project:

Project Title - The name of the project
Overview - A brief description outlining what the project
Table of Contents - You can link to the different sections below
Description - A more detailed outline of the project. What does it do? Is there a high level list of features? If describing a project that has visual features, consider adding pictures or animations of the features and functionality in this section. See Adding Screen Captures below.
Installation - How can another developer get your project up and running on their own? What dependencies are required? Are there environmental requirements? Be specific, and outline steps to take in order to get the project running.
Usage - Further details on how the project is meant to be used may be helpful. For a library or framework, this section would outline how to use the library within another project (see socket.io  ). For a service that is meant to be used within a larger project architecture, instructions on how to integrate may be necessary (see node-statsD  ).
Additionally, for some projects, additional information might make sense.

Related Projects - Links to other repositories that are related to the current one. Are there partner projects? Is there a newer version of this project elsewhere?
Team Members - Add the names of your team members. Describe roles on the team such as "Product Owner", "Scrum Master" and more.
Contributing - If you'd like others to be able to contribute to your work, outline a process through which they can submit a request for changes to be incorporated. More specifically, outline the Git workflow for these contributors. Should they use a feature branching workflow? Should they rebase or merge? Should the fork the repository? What is the review process?
Roadmap - What future enhancements are planned? What is the current status of the project? Is it being actively maintained?
License - If open source, state how the project is licensed.
For the Capstones
When creating a README for your capstone projects, consider the different objectives of the work you did on each. Think about how to best reflect where your effort went for each, and how to best represent that work. Due to the differences between the two capstone projects, it is likely that their READMEs will be very different.

Adding Screen Captures
When documenting a project that focuses heavily on user interface features and functionality, it can be helpful to include pictures or animated gifs of the project. This is a great backup for maintaining a deployed build of the project, as readers can see the running application without setting it up themselves.

Think through key user interactions that you'd like to record. It is best to separate interactions into individual screen captures and include multiple short gifs, as opposed to a single longer gif with multiple steps.

Tools that can help you capture a screen recording include:

Recordit (https://recordit.co/)
Asciinema (https://asciinema.org/)
ttygif (https://github.com/icholy/ttygif)
Further READing
README Overview (https://www.makeareadme.com/)
A curated list of awesome READMEs (https://github.com/matiassingers/awesome-readme)

Project Title - Atelier

Overview - Retail website that gives users several options including selecting size, color, adding the selected item to cart, browsing through related products, giving reviews, and much more.

Table of Contents -

Overview
  * Product Information
  * Style Selector
  * Add to Cart
  * Image Gallery

Ratings & Reviews
  * Reviews List
  * Individual Review Tile
  * Sort Options
  * Rating Breakdown (Filtering)
  * Product Breakdown (Factors)
  * Write New Review
  * Keyword search - Low Priority

Questions & Answers
  * Questions List
  * Individual Question
  * Search Questions
  * More Answered Questions
  * Add a Question
  * Add an Answer Modal

Related Items & Comparison
  * Related Product Cards
  * List Behavior
  * Related Products List
  * Your Outfit List


Description -

Installation - react, react-dom, express, webpack, webpack-cli, babel-loader, @babel/preset-env, @babel/preset-react

Usage -