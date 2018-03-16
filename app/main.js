new Vue({
    el: '#app',
    data: {
        submissions: Seed.submissions
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => b.votes - a.votes);
        }
    },
    methods: {
        upvote(submissionId) {
            const submission = this.submissions.find(s => s.id == submissionId);
            if(submission) {
                submission.votes++;
            }
        }
    }
});