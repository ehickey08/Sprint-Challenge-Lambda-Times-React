1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    PropTypes are a way for React Developers to ensure the 'type' of data being passed through props is correct. Since JavaScript is a dynamically typed language, the wrong type of data can be passed to a component and still appear to function. PropTypes is a way to type check the data being passed away to prevent a bug/error from occurring (especially if a developer is new to the code).

2. Describe a life-cycle event in React?

    Components can be broken down into three life events: Birth (mounting), Growth (updating), and Death (unmounting). We can call methods to performs actions when each of these three events occur. 

3. Explain the details of a Higher Order Component?

    A HOC is a function that receives a Component (or multiple Components) as an argument and then returns a new component. Often the new component is very similar to the original one passed in, but with some slight changes. HOCs are used for components that share some beahvior or data, such as authentication of a client/user. 

4. What are three different ways to style components in React? Explain some of the benefits of each.

    A. Vanilla CSS (or through Sass) can be used in the traditional way using classNames. The benefit is you are in full control, however, it can be hard to know exactly how to get the look you are going for. 
    B. Library (React Strap, Ant Design, etc.) which allows you to import components and their css files to get pre-defined, opinionated components. The benefit is the spped with which you can build a page using these components and their styling. The downside is how opinionated they can be and difficult to override. 
    C. Styled-Components: This library allows us to write our CSS in the javascript file. This allows you to keep all your information in one page and in essence still write Vanilla CSS without having to keep track of classNames and different files. 