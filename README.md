# Next.js + Tailwind CSS REACT NEWS APP

This is a demonstration of the new next.js 13 features such as server side components, dynamic pages, API fetching with GraphQL.

News portal made in react. Retrieve live news and blog articles including images using mediastack.com REST API through StepZen.com free version with which a GraphQL API is created to easily access MediaStack data. Users can access the news from different categories as well as by searching a topic through the search bar. There is the option to see more details by clicking on the 'Read More' button. There is the option to apply Dark and light Mode through next-themes package. The application applies the system default theme by default.

See it in action: https://news-react-app-rccc7.vercel.app/

## Screenshots:

<div align="center">
  <img src="screenshots/RcccNews-react.jpg" alt="screenshot" width="700" style="width:700px;"/>
</div>

## Technologies & Dependencies:

- NextJS 13
- TailwindCSS
- HeroIcons
- GraphQL
- [StepZen](https://www.stepzen.com)
- [Mediastack](https://mediastack.com) REST API.
- TypeScript

<!---## Step by Step Setup & Deployment Instructions:

1.  Create the app with the Nextjs + Tailwind CSS template based on the documentation at: https://v2.tailwindcss.com/docs/guides/nextjs
    npx create-next-app -e with-tailwindcss my-project
    cd my-project
    1.1. Install line-clamp tailwindcss extension for multi-line truncation: https://tailwindcss.com/blog/multi-line-truncation-with-tailwindcss-line-clamp
    npm install @tailwindcss/line-clamp
    After installing reference it in the plugins section inside the tailwind.config.js file
    NOTE: We could use truncate, but truncate is only for one line, but this plugin can be applied in texts
    with more than one line.
2.  Implement Next.js 13 features:
    -Once opened the project with VS code, create the app folder in order to use server side components.
    That is, the components saved in that directory will be server side componentes.
    - Then go to next.config.js and enable the experimental feature for the app folder:
      experimental:{
      appDir:true,
      }
    - Then restart the server in order to make the changes take effect.
    - Create the page.tsx component inside the just created folder
    - Delete the pages/api/index.tsx file in order to avoid the conflict between this file
      and the app/page.tsx file
    - Inside the app/layout.tsx file, which was automatically created, import the
      tailwindcss dependencies:
      import "../styles/globals.css";
      and make the necessary adaptations in the app/layout.tsx file.
3.  Install the heroIcons library. For mor info go to https://heroicons.com
    npm install @heroicons/react
4.  Create the folder 'lib' in which we'll implement the fetchNews functions
5.  Install the graphql-request library to fetch from graphql: https://www.npmjs.com/package/graphql-request
    npm add graphql-request graphql
6.  Create and subscribe to a media stack API account from which we'll retrieve the media news:
    https://mediastack.com/ and get the API access key from https://mediastack.com/quickstart,
    then create the .env.local file in which we'll save the just obtained API key
7.  Setup the stepzen account to connect the app with grahpql: https://dashboard.stepzen.com/ Login with gitHub account.
    To configure stepzen in the application follow the instructions here: https://stepzen.com/getting-started
    npm install -g stepzen
    stepzen login -a wertheim (When asked copy and paste the API key provided in the link above????).

        - Go to https://dashboard.stepzen.com/account and copy the API key and paste into the environment file (.env.local)
        - Initialize the stepzen api in the project
            stepzen init
        which will create the stepzen.config.json file
        - In the stepzen page: https://stepzen.com/getting-started in the section "Where is your data coming from?"
        select the "REST API" box and follow the instructions described there:
            1. Import a REST API endpoint from your terminal
                stepzen import curl
                Paste this URL when asked for the URL or a full curl command:
                http://api.mediastack.com/v1/news?access_key=MEDIASTACK_ACCESS_KEY&sources=business,sports
                or:
                http://api.mediastack.com/v1/news?access_key=MEDIASTACK_ACCESS_KEY&countries=us%2Cbg&limit=100&offset=0&sort=published_desc
                or this one if we want something more generic:
                http://api.mediastack.com/v1/news?access_key=MEDIASTACK_ACCESS_KEY
            NOTE that if we copy and paste the command above ???? with the mediastack access key we can obtain the json
            response directly in the browser
            IMPORTANT: Replace the MEDIASTACK_ACCESS_KEY with the one obtained in in the quickstart guide described
            in step 6, and the sources can be any of the optional parameters described there.
            When asked for another questions such as "parameters for endpoint URL path",
            just leave them blank and hit Enter. After that a message like "Successfully imported schema curl from StepZen"
            should be displayed
            2. After running the command described above, stepzen will automatically create the files
             curl/index.graphql and index.graphql with the graphql setup configuration based on the response given
             by the curl URL. Notice that the curl/index.graphql file contains the graphql types and queries which we'll use
            3. Now run the following command to start the stepzen locally:
                stepzen start
                - IMPORTANT: After starting stepzen some instructions are displayed such as the AMI URI from which we can fetch
                the data:
                    Invoke-WebRequest `
                    -Uri https://wertheim.stepzen.net/api/worn-woodpecker/__graphql `
                    -UseBasicParsing `
                    -Method "POST" `
                    -Headers @{
                        "Content-Type" = "application/json"
                        "Authorization" = "APIKey $(stepzen whoami --apikey)"
                    } `
                    -Body (@{
                        "query" = 'query SampleQuery { __schema { description queryType { fields {name} } } }'
                    } | ConvertTo-Json)

                    or explore it with GraphiQL at http://localhost:5001/api/worn-woodpecker

                    Your API URLs are https://wertheim.stepzen.net/api/worn-woodpecker/__graphql
                    and wss://wertheim.stepzen.net/stepzen-subscriptions/api/worn-woodpecker/__graphql (subscriptions)
                - Note: We can access to localhost graphiql UI to make queries at
                 http://localhost:5001/api/worn-woodpecker
                 This is an example of a query. Note we must pass the access key as a parameter, otherwise we'll
                 receive a non authorized error:
                    query myQuery {
                        myQuery(access_key: "MEDIASTACK_ACCESS_KEY") {
                            data {
                            author
                            category
                            country
                            description
                            image
                            language
                            published_at
                            source
                            title
                            url
                            }
                        }
                    }
                - Note: To check out the stepzen apikey, run the following command in the terminal: stepzen whoami --apikey

    7.1. If we come across an error like this in the output: "Module not found: Can't resolve 'encoding' in 'C:\Files\Work\Projects\Practices\ReactJs\NewsReact-app\news-react-app\node_modules\node-fetch\lib'" install the encoding package, which is only useful to prevent that annoying message:
    npm install encoding

8.  Optional: Create the file response.json in which we'll store mock data obtained by copying the results from making a query with either Postman or browser. So we won't exceed the limit of 500 free requests per month from mediastack.

9.  Install the next-themes theme provider to apply the dark mode / light mode switch functionality
    https://www.npmjs.com/package/next-themes
    npm install next-themes
    Add the darkMode: "class" attribute inside tailwind.config.js file in order to apply
    the class attribute in the Theme provider (see Providers.tsx)
10. Install react-timeago to use in LiveTimestamp.tsx
    npm i react-timeago
    //Install also its type definitions so we won't see the underlined error in vsCode:
    npm i --save-dev @types/react-timeago
11. Deploy to vercel using Vercel CLI: Instructions on installing Vercel CLI: https://vercel.com/docs/cli
    11.1. Install Vercel CLI:
    npm i -g vercel
    11.2
    vercel login - select Login to Vercel with github. - When asked whether to link to existing project, type 'n' - When asked the project's name type: news-react-app - When asked in which directory is the code located, let './' - When asked whether want to modify the settings, select 'N' - At this point the buidling process will fail because we haven't set up the environment
    variables. Therefore, it is necessary to set them up by loading them manually
    via the web vercel account. Login to vercel and go to the news-react-app project which has between
    already created then go to settings and add the two environment variables defined in the .env.local file
    (STEPZEN_API_KEY and MEDIASTACK_API_KEY) - After setting up the environment variables generate the build locally by
    npm run build
12. Finally, It'll be necessary to upload to github and associate with vercel account. Follow these steps:
    12.1 Upload to github:
    -Create the repository
    git init
    git add -A
    git commit -m 'first commit'
    git branch -M main
    git remote add origin https://github.com/rccc7/news-react-app.git
    git push -u origin main
    12.2. Associate the repository with Vercel: - In vercel go to the project - In the first screen click the button "Connect to Git Repository" - Select github - Select the react-news-app - save
    The project will be redeployed again based in the new github respository contents.
-->
