document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        let counter = document.getElementsByClassName("timeline-card").length;
        let currentPosition = window.scrollY + window.innerHeight;
        let timelineCardId;
        let timelineImgId;
        let card = {};
        let cards = [];
        let id;

        function Card(timelineCardId, timelineImgId, hasShown, offsetTopValue) {
            this.timelineCardId = timelineCardId;
            this.timelineImgId = timelineImgId;
            this.hasShown = hasShown;
            this.offsetTopValue = offsetTopValue;
        }

        for (let i = 1; i <= counter; i++) {
            timelineCardId = "timeline-card" + i;
            timelineImgId = "timeline-img-item" + i;
            card = new Card(timelineCardId, timelineImgId, false, document.getElementById(timelineCardId).offsetTop)

            cards.push(card);
        }

        cards.forEach((card) => {
            if (!card.hasShown && (card.offsetTopValue < currentPosition)) {
                id = card.timelineCardId.match(/\d+$/)[0];
                card.hasShown = true;

                if (id === 0) {
                    document.getElementById(card.timelineCardId).classList.add("timeline-card-animation", "timeline-card-animation-left");
                } else if (id % 2 === 0) {
                    document.getElementById(card.timelineCardId).classList.add("timeline-card-animation", "timeline-card-animation-left");
                } else {
                    document.getElementById(card.timelineCardId).classList.add("timeline-card-animation", "timeline-card-animation-right");
                }

                document.getElementById(card.timelineImgId).classList.add("timeline-img-item-animation");
            }
        })
    })
});
