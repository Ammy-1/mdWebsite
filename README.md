# MDPLUS clinic website
This file contains the code for the MDPLUS clinic website. This website is a single page application (SPA) created using React. 

## Updating the site
To update the website go to the terminal on `visual studio code`. This can be done by clicking on the button with 3 horizontal lines in the upper left corner of the app. This will bring a dropdown menu, then select `Terminal` then `new terminal`. 

You should then see something like this appear on the app: `PS C:\Users\user1\Desktop>`. Since the website is in the folder `mdWebsite`, click on the terminal and add this line `cd mdWebsite`(and press `Enter`) to move into that folder. To confirm, a similar line to this should appear on your terminal: `PS C:\Users\user1\Desktop\mdWebsite>`. 

Ensure that you have saved your changes using `CTRL + s` or similar on the files opened. Then go to the terminal and add the line `npm run deploy` (and press `Enter`). Many lines will appear on the terminal as the site is deployed but a successful deployment should end with the line `Published`. 

Your site should now be updated. (Note: this may take a few minutes to appear on the website)


## Notices
Notices are handled in the `notifsMaster.json` file which can be found in the `src` folder. Initially, the file is empty and looks like this:

```
[

]
```
This causes the website to show the text "No notices yet" on the notices page and section on the home page. Any new notices would have to be added between the square brackets.

### Adding a new notice
Notices have 3 fields that need to be filled:
- date: the date the notice was created on
- heading: a title/header 
- content: any text content

To add a new notice, you need to create a new notice object in the file with these fields. An example has been provided below of a notice object: 

```
    {
        "date": "11/01/2025",
        "heading": "new",
        "content": "this is some content"
    }
```
After filling in the fields between quotation marks(") with the corresponding information, this code for a notice object is then was added **between** the 2 square brackets. Saving this file will now update the website and should show a notice on both the home and notices pages.

To add additional notices, we create a notice object exactly the same as before and add it after the last notice in the file, but still between the 2 square brackets. Make sure to add a comma (,) between the previous notice and the newly added notice. An example of the file containing 2 notices is shown below:

```
    [
        {
            "date": "11/01/2025",
            "heading": "new",
            "content": "this is some content"
        },

        {
            "date": "11/01/2025",
            "heading": "new1",
            "content": "this is some content"
        }
    ]
```

### Deleting a notice
Notices can easily be removed by deleting the corresponing notice object from the `notifsMaster.json` file. If this was the last notice on the file, remove the comma at the end of the new last notice.

## Fees table
Fees have 5 fields that need to be filled:
- item: item number (if not relevant use a -)
- description: short description of the fee  
- fee: the fee to pay
- rebate: the medicare rebate (if not relevant use a $0)
- cost: the out of pocket cost

Update the fees table similarly to the notices by creating a new fees object and adding it to the file **between** the square brackets. Ensure that there is a comma between each object and Mkae sure to save the file to see the updated fees table. An example of a fees object is shown below:

```
{
    "item":"721",
    "description": "Health Care Plan (HCP)",
    "fee":"$204.35",
    "rebate":"$164.35",
    "cost":"$40"
}
```


            