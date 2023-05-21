import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    useTitle('Toy-Place|blogs')
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10">
                <div className="max-w-3xl bg-white shadow-md rounded-lg px-8 py-6">
                    <h1 className="text-3xl font-bold text-center mb-6">Welcome to the Q&A Blog</h1>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Question 1:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                        <p className="mt-2 text-gray-600"><span>An access token is a digitally signed token that is issued by an authentication server when a user successfully logs in or authenticates. It contains information about the user and their permissions, such as their identity, roles, and any additional claims.</span></p>
                        <p>A refresh token, on the other hand, is a long-lived token also issued by the authentication server along with the access token. The refresh token is used to obtain a new access token without requiring the user to re-authenticate. When the access token expires, the client can use the refresh token to request a new access token from the server.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Question 4:What is MongoDB aggregate and how does it work?</h2>

                        <p className="mt-2 text-gray-600"><p>MongoDB's aggregate is a powerful feature that allows you to perform complex data analysis and transformations on collections of documents. It provides a flexible framework for grouping, filtering, sorting, and manipulating data using a pipeline of stages. Aggregation pipelines consist of various stages that operate on the input data, enabling you to perform operations like matching, projecting fields, grouping, sorting, and calculating aggregate values. It is a versatile tool for data aggregation, analytics, and reporting in MongoDB. <br />Example:

                            Project Stage: The $project stage allows you to reshape the documents in the pipeline by specifying which fields to include or exclude, renaming fields, adding new computed fields, or transforming the existing fields.

                            Group Stage: The $group stage groups documents together based on a specified key and performs aggregation operations on the grouped data, such as calculating the sum, average, minimum, or maximum values of fields within each group.

                            Sort Stage: The $sort stage sorts the documents based on one or more fields in either ascending (1) or descending (-1) order.

                            Limit and Skip Stages: The $limit stage restricts the number of documents returned in the output, while the $skip stage allows you to skip a certain number of documents.

                            Other Stages: MongoDB provides various other stages, such as $unwind (to break down arrays into separate documents), $lookup (for performing joins across collections), $project (for reshaping documents), and more. These stages can be used as per the specific requirements of your data analysis or transformation tasks.

                            By combining and configuring these stages in a pipeline, you can perform complex data aggregations, transformations, and analytics on your MongoDB collections. The aggregate function is highly flexible and can handle a wide range of data processing scenarios.</p></p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Question 2:Compare SQL and NoSQL databases.</h2>

                        <p className="mt-2 text-gray-600">SQL (Structured Query Language) databases are based on the relational data model. They use structured tables with predefined schemas, where data is organized into rows and columns. SQL databases offer strong consistency, ACID (Atomicity, Consistency, Isolation, Durability) transactions, and support for complex joins and relationships. They are ideal for applications with well-defined schemas, complex queries, and strict data integrity requirements.

                            NoSQL (Not Only SQL) databases, on the other hand, provide a flexible schema or schema-less approach. They are designed to handle large volumes of unstructured or semi-structured data. NoSQL databases come in different types, such as key-value stores, document stores, columnar databases, and graph databases. They prioritize scalability, high performance, and distributed data processing. NoSQL databases are suitable for applications that require horizontal scalability, flexible schemas, and high write/read throughput.</p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Question 3:What is express js? What is Nest JS?</h2>

                        <p className="mt-2 text-gray-600">Express.js is a popular web application framework for Node.js. It provides a minimalistic and flexible approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and rendering responses. It allows developers to define routes and handle different HTTP methods (GET, POST, PUT, DELETE, etc.) for those routes.</p>
                        <p>NestJS, on the other hand, is a progressive and opinionated Node.js framework built on top of Express.js (though it also supports other frameworks like Fastify). It is designed to provide an enterprise-grade architecture for building scalable and maintainable server-side applications. </p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Blogs;