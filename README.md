# Sales Pages

These are the instructions for updating the sales pages in Umbraco. 
For both pages there is no need to edit CSS of JS just copy and paste into umbraco.


## Sales Page V1

For sales page V1 all that you need to do is copy and paste the individual products into the 
product container div, this is the div with the clases **sale-items container**. There are two product 
containers one before/above the testimonials section and one after/below. Make sure that this container
is the only parent container for the individual product containers.

I try to divide the products as evenly as I can when populating these to containers, but I don't 
count them out to make sure its exactly 50/50. Just eye ball it.

## Sales Page v3

Sales page v3 is a little more complicated but its not that bad. 

There are two differnet containers types for the info sections. One doesn't have a background color 
and one has a grey background. For the design to look good you have to make sure that these two containers
alternate. So the first container should have no background, the second should have a grey container, third 
should have no background ect.

There is one catch with this pattern. The container after/below the **Why trust the traffic safety store** section
should have the same color background as the container that comes before the **Why trust the traffic safety store** section.

Usually They give me 5 products that will be on sale so I do 3 before/above the **Why trust the traffic safety store**
section and 2 after that section. 


So it would be:

- No Background
- Grey Background
- No Background
- Why Trust Section
- No Background
- Grey Background



Sometimes they only give me 4 products, in that case I do 2 before/above and 2 after/below the "Why trust" Section.

So it would look like:

- No Background
- Grey Backgroun
- Why Trust Section
- Grey Background
- No Background

You get the idea.

Othe that that it's just a matter of filling out the sections in the div with the appropriate content. I made comments
in the HTML that should help.

Good Luck!