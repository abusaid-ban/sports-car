

const Blog = () => {
    return (
        <div className="my-5 ">
            <h2 className="text-center text-4xl text-blue-400">Simple Answer Questions</h2>

            <div >
                <hr />
                <div className="p-5">
                    <h5 className="text-2xl"> Question #1 : What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
                    <p> Answer:An access token used in authentication system.It is like a credential to authenticate actual user. as well as refresh token is same. But access token and refresh token have characteristics difference. An access token is a credential that is used to authenticate and authorize a user to access protected resources or perform specific actions in an application or API on the other hand A refresh token is a long-lived token used to obtain a new access token once the previous access token has expired or is about to expire. I provided e real life example. Everybody in bangladesh who age is above 18 have a nid card. If the person want to create a Passport then they must be need her nid card. If he lost her passport they can easily build in new passport helping of old nid. But if they lost her nid they cannot create a passport . First off all they create a nid then he can create a passport. As well as here access token is like a passport.If it lost it will be re created helping of refresh token.Here we can say that the refresh toke is like a our nid card. If we say that how they work then we say,first off all we created a refresh token in our server site. refresh tokens, being long-lived and more sensitive, should be stored in a more secure location. They should be kept on the server-side, typically in a secure HTTP-only cookie or an encrypted and protected server-side storage, to minimize the risk of leakage or misuse. When the refresh token created then it send a access token in our client side. The access toke received  then the user logged in first. and it(access token) stored localStorage or sessionStorage. Then its ready to working. When the user hit the get api then he send the access token to the server site. Server site received the token and verify that the access token is valid. is access token is valid then they permit to send responses data otherwise send a error. If the access token expired then server crated a new access token helping of the refresh token. </p>
                    <h5 className="text-2xl"> Question #2 :Compare SQL and NoSQL databases?</h5>
                    <p> Answer:SQL and NoSQL are two different types of database management systems, each with its own strengths and use cases. There are some behaviour difference like Sql databases are structured and use a fixed schema defined in advance. Data is organized into tables with predefined columns and data types and on the other hand Nosql databases are schema-less or have flexible schemas, allowing for dynamic and evolving data structures. Data is stored in collections, documents, key-value pairs, or other formats. Sql databases enforce strict data integrity rules through primary key and foreign key relationships, ensuring data consistency and accuracy on the other hand NoSQL databases are designed for horizontal scalability, allowing them to handle large amounts of data and high traffic loads by distributing data across multiple servers. And also there is more difference. </p>
                    <h5 className="text-2xl"> Question #3 : What is express js? What is Nest JS ?</h5>
                    <p> Answer: In both are a server-side web application framework in Node js. Express.js is a minimalist and flexible web application framework for Node.js. NestJS is a full-featured, extensible, and progressive framework for building scalable and maintainable server-side applications in Node.js. Express.js focuses on simplicity, allowing developers to create routes, handle HTTP requests and responses, and implement middleware for various functionalities such as authentication, error handling, and logging Nest js is built with TypeScript.NestJS follows the architectural pattern of Angular, known as modular development, which promotes a structured and organized codebase. Express.js is widely adopted and has a large ecosystem of plugins and middleware available, making it a popular choice for building lightweight and scalable web applications in Node.js. So we can say they both are a web application framewok in nodejs and in the types of situation they can used or based on the requirements they can use in various projects.Both frameworks have their advantages and are widely used in the Node.js ecosystem.

                    </p>
                    <h5 className="text-2xl"> Question #4 :What is MongoDB aggregate and how does it work?</h5>
                    <p> Answer:MongoDB s aggregate is a powerful method used to perform advanced data aggregation operations on collections within the MongoDB database. Suppose we need to filter some data from mongodb then we can easily do it by the helping of mongodb aggregation. Mongodb aggregation allows to transformd ata, perform calculations, apply filters, and create complex pipelines to aggregate and analyze data in a flexible and efficient manner. Its work in some process or method which is pipeline stage,document flow,pipeline operetors,expressive data transformation etc. In the pipeline stage the aggregation pipeline conssist of some multiple stage that are executed sewunatiallu to process the data,each stage performs a specific operation on the data, such as filtering, projecting fields, grouping, sorting, or performing calculations. there are some pipeine operaton line $match,$project,$sort,MongoDB provides a rich set of pipeline operators that can be used within the stages to perform various operations. Some commonly used operators include $match for filtering documents, $group for grouping documents based on specified criteria, $project for specifying the fields to include or exclude in the output, $sort for sorting the output, and many more. So we can say the by using the MongoDB aggregate method and its pipeline stages and operators, we can efficiently manipulate and process large volumes of data, perform complex calculations, and generate aggregated results based on our specific requirements.

                    </p>
                </div>


            </div>

        </div>
    );
};

export default Blog;