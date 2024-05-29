const { User, Post } = require('./models');
const { connectToDB } = require('./utils');

const createSampleData = async () => {
    await connectToDB();

    // Ensure that the collection gets created by inserting a document
    try {
        const user = new User({
            username: 'sampleuser',
            email: 'sampleuser@example.com',
            password: 'samplepassword',
        });

        await user.save();
        console.log('User created:', user);

        const post = new Post({
            title: 'Sample Post',
            desc: 'This is a sample post description.',
            userId: user._id.toString(),
            slug: 'sample-post',
        });

        await post.save();
        console.log('Post created:', post);
    } catch (error) {
        console.error('Error creating sample data:', error);
    }
};

createSampleData()
    .then(() => {
        console.log('Sample data creation script finished.');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error running script:', error);
        process.exit(1);
    });
