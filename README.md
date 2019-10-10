# Fetch-Inner-Dom-Example

# Important notes you should know

**Parameters in fetch function**

1.*fetch(url,cors)*

   - **url** - before you use the fetch function, first you need to stand up a server. In my case I used http-server with npm (nothing special)
   - **cors** - The last parameter is important to add it, if you dont use the right property and value like *{mode: 'no-cors'}*
               the result will not be as you expect. The property is putting there because we need to say to the server that the current request is not going to be like a POST or GET request. So watch out with it
               
**And that's it :)**
