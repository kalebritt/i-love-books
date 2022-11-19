//import requirements
const { AuthenticationError } = require("apollo-server-express");
const { User } = require("/server/models");
const { signToken } = require("/server/utils");

//resolvers
const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return userData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
    },

    //mutation

