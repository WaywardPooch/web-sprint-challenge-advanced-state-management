# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API helps developers connect a global state to individual components, instead of having to prop-drill states down to (potentially) deeply nested components. It gives us an easier way of doing what Redux does (manage global state), at the cost of worse performance compared to Redux and not being able to use middleware (without workarounds).

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

In Redux, actions are objects that contain a type and payload to be sent to a reducer, which "reduces" that object into a new global state based on the information that it contained and the case that it is matched to. The Redux store is the container that holds the global state across an application; there can only be one of these present at a time. The store is known as the single source of truth because of this.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

Thunk allows us to dispatch more complex actions to our reducer, primarily for actions that need to be asynchronous or delayed instead of immediately executed like standard actions are.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

I like using the context API combined with a self-produced reducer; it gives me the control of being able to see all my potential actions in one place in an easy to read format, without having to worry about the initial setup required with Redux. That said, I'll probably end up using Redux anyways for personal projects thanks to its faster performance and ability to integrate middleware such as the redux-logger.