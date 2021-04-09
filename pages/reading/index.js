import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}: Book Reviews</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Book Reviews</h2>
        <p>
          A selection of tech and career related books which I've read this
          year.
        </p>
        {/* <h3>Currently reading</h3>
        <p>How Computers Really Work by Matthew Justice</p> */}
        <h3>2021</h3>
        <ul>
          <li>
            <a href="#book-howComputersReallyWork">How Computers Really Work</a>
          </li>
          <li>
            <a href="#book-digitalMinimalism">Digital Minimalism</a>
          </li>
          <li>
            <a href="#book-deepWork">Deep Work</a>
          </li>
          <li>
            <a href="#book-indistractable">Indistractable</a>
          </li>
          <li>
            <a href="#book-technicallyWrong">Technically Wrong</a>
          </li>
          <li>
            <a href="#book-algorithmsOfOppression">Algorithms of Oppression</a>
          </li>
          <li>
            <a href="#book-invisibleWomen">Invisible Women</a>
          </li>
        </ul>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/how_computers_really_work.jpg"
            className={utilStyles.bookReviewImage}
            alt="The book How Computers Really Work"
          />
          <h3
            id="book-howComputersReallyWork"
            className={utilStyles.bookReviewTitle}
          >
            How Computers Really Work
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Matthew Justice</p>
          <p>
            I have to admit I was initially going to give this book 3 stars.
            Last week however, I was struggling to understand something at work
            and then I remembered that the concept was discussed in the book! I
            was able to go back and use it as a reference! I love books that
            pull me back in after I’ve finished reading them. 4 stars!
          </p>

          <p>
            I learnt a number of things from this book. Mainly I learnt that I
            *definitely* want to stick to the software side of computers. The
            hardware just doesn’t interest me at all! I really struggled getting
            through the first half of the book because of this. It took me 2
            months to get through this book mainly because sitting down and
            reading through basically a textbook about ‘math with digital
            circuits’ made me want to cry.
          </p>

          <p>
            This book broadly covers concepts from basic electrical circuits,
            all the way up to modern technologies like blockchain. Each chapter
            includes projects to really help you understand but you need a
            raspberry pi set up to do these. Unfortunately I don’t have one so I
            had to skip the projects. As a result I don’t think I got as much
            out of the book as I could have.
          </p>

          <p>
            If you have lots of time, an interest in computer hardware, and own
            a raspberry pi (or are willing to buy one) then you will probably
            love this book! For me personally, I just found an occasional nugget
            of knowledge that was really valuable to my career as a software
            engineer / web dev. Also the next time my parents ask me what
            bitcoin mining is, I’ll have an answer!
          </p>

          <p>
            I think for the right target audience this book could be a really
            excellent resource and I’m super grateful to{" "}
            <a href="https://nostarch.com/">No Starch Press</a> for sending me
            this copy! Thank you! ❤️
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://nostarch.com/how-computers-really-work">
            Purchase How Computers Really Work from No Starch Press
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/deep_work.jpg"
            className={utilStyles.bookReviewImage}
            alt="The audio book of Deep Work"
          />
          <h3 id="book-deepWork" className={utilStyles.bookReviewTitle}>
            Deep Work
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Cal Newport</p>
          <p>
            I’m giving this book a reluctant 4 stars. It’s reluctant because
            this book is full of long winded anecdotes about people who work
            deeply. Which is fine, but ironically it distracted me from the key
            takeaways of *how* to work deeply. To the point that I’m listening
            to it a second time because I feel like I tuned out a bit! 😅
          </p>

          <p>
            Saying all this however, this book has inspired me to improve my
            daily habits. Since starting this book I have become much better at
            time blocking and scheduling my day. I also removed all social media
            apps from my phone during the working week. It’s been *really* hard
            but I actually didn’t miss them as much as I thought I would.
          </p>

          <p>Other key takeaways from the book:</p>
          <ul>
            <li>
              Have a consistent cut off time to finish work for the day (rest is
              important for deep work!)
            </li>
            <li>Deep work takes *lots* of practise</li>
            <li>
              Even the most successful people can’t do more than 4 hours of deep
              work per day.
            </li>
            <li>
              Productive meditation is important: using the time when you’re
              physically busy but mentally not (eg. walking the dog for me) to
              mull over a problem
            </li>
          </ul>
          <p>
            If you love stories and anecdotes of successful people and how they
            work, you’ll probably love this book! If you don’t, it will be more
            of a struggle but it’s definitely a good kick in the pants to take
            some action towards improving your focus.
          </p>
          <p>
            I'm quite keen to check out Cal's book on 'Digital Minimalism'
            sometime soon.
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/deep-work-cal-newport/book/9780349411903.html">
            Purchase Deep Work from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/indistractable.png"
            className={utilStyles.bookReviewImage}
            alt="The audio book Indistractable"
          />
          <h3 id="book-indistractable" className={utilStyles.bookReviewTitle}>
            Indistractable: How to Control Your Attention and Choose Your Life
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Nir Eyal, Julie Li</p>
          <p>
            My unplanned bonus book of January. If you’ve never read anything at
            all, ever, about distraction or habits or focus then this is
            probably a good place to start! But there’s nothing really new or
            groundbreaking. One chapter felt like a summarised version of Atomic
            Habits (which I’ve already read and loved!). Others chapters were
            common sense, eg. remove apps and notifications from your phone.
          </p>
          <p>
            There were some good tips in there but it wasn’t anything I hadn’t
            heard before. Also, a great question came from @hilarycallaghan who
            asked me if I thought it would apply to neurodiverse folk: I highly
            doubt it.
          </p>
          <p>⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/indistractable-nir-eyal/book/9781526610201.html">
            Purchase Indistractable from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/technically_wrong.png"
            className={utilStyles.bookReviewImage}
            alt="The book Technically Wrong"
          />
          <h3 id="book-technicallyWrong" className={utilStyles.bookReviewTitle}>
            Technically Wrong
          </h3>
          <p className={utilStyles.bookReviewAuthor}>
            by Sara Wachter-Boettcher
          </p>
          <p>
            I *loved* this book! Definitely one of my favourites that I’ve read
            lately!
          </p>
          <p>
            If you’ve read Invisible Women it does touch on a lot of similar
            concepts but this book is way shorter, way less intense, and won’t
            leave you feeling emotionally drained. It also raises broader issues
            in the tech industry. It touches on the myth of meritocracy as most
            of these types of books do, but it looks more closely at tech
            companies and examples of when things have gone wrong.
          </p>
          <p>
            There’s examples from Twitter, Facebook, Uber, Reddit, Google,
            Tumblr, etc. that prove time and time again what happens when the
            people who are designing and building products all look the same,
            all think the same. They’re famous examples so if you keep on top of
            this sort of news, many of them won’t be a surprise to you - but if
            you’re new to tech like I am it’s very interesting to read about!
          </p>
          <p>
            There’s also a great concept in the book about designing with
            “stress cases” in mind rather than “edge cases”.
          </p>
          <p>
            If you work in the tech industry and haven’t yet begun researching
            the types of impact badly designed technology can have (let alone
            the tech industry itself), I highly recommend this book as a great
            place to start.
          </p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/technically-wrong-sara-wachter-boettch/book/9780393356045.html">
            Purchase Technically Wrong from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/digital_minimalism.jpg"
            className={utilStyles.bookReviewImage}
            alt="The book Digital Minimalism"
          />
          <h3
            id="book-digitalMinimalism"
            className={utilStyles.bookReviewTitle}
          >
            Digital Minimalism
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Cal Newport</p>
          <p>
            Having now read two of Cal’s books (
            <a href="#book-deepWork">Deep Work</a> was my first), I’ve now come
            to the firm decision that his way of writing is probably not for me.
            However, the content is right up my alley!
          </p>
          <p>
            While some of the content in Deep Work was great and useful, most of
            it was rambling stories of people who have successfully worked
            deeply in the past. Digital Minimalism is much more practical and
            although it still explores background information to back up each
            suggestion, I found I wasn’t tuning out as much as I had with Deep
            Work. It is a definite improvement!
          </p>
          <p>
            For the month of March I’ve been undertaking the suggested “digital
            declutter”. I created rules for the digital products that I would be
            taking a break from, and for most part so far I have stuck to them.
            I’m interested to see how I feel after the end of the month when I’m
            “allowed” to return to these services. I’m hoping to put some of the
            suggestions in this book into practise to limit my social media
            usage.
          </p>
          <p>Key takeaways:</p>
          <ul>
            <li>
              Do a 30 day “digital declutter”. Make sure you define the rules,
              take a 30 day break, and then reintroduce only the technologies
              that add a lot of value to your life.{" "}
            </li>
            <li>
              Replace time on digital products with high quality leisure
              activities
            </li>
            <li>Make things (I’ve started crocheting again)</li>
            <li>Join something (I’ve joined a dog obedience club)</li>
            <li>
              Delete social media from your phone - desktop only (this is hard
              for Instagram!)
            </li>
            <li>Don’t click ‘like’ - have conversations with people instead</li>
            <li>Plan for and block out time for your leisure activities</li>
          </ul>
          <p>
            I’m giving this one 4 stars as well, but it’s a strong 4 stars
            rather than the reluctant 4 stars I gave Deep Work. I like Cal’s
            content, but I appreciated the more direct practical advice of
            Digital Minimalism.
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/digital-minimalism-cal-newport/book/9780241453575.html">
            Purchase Digital Minimalism from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/deep_work.jpg"
            className={utilStyles.bookReviewImage}
            alt="The audio book of Deep Work"
          />
          <h3 id="book-deepWork" className={utilStyles.bookReviewTitle}>
            Deep Work
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Cal Newport</p>
          <p>
            I’m giving this book a reluctant 4 stars. It’s reluctant because
            this book is full of long winded anecdotes about people who work
            deeply. Which is fine, but ironically it distracted me from the key
            takeaways of *how* to work deeply. To the point that I’m listening
            to it a second time because I feel like I tuned out a bit! 😅
          </p>

          <p>
            Saying all this however, this book has inspired me to improve my
            daily habits. Since starting this book I have become much better at
            time blocking and scheduling my day. I also removed all social media
            apps from my phone during the working week. It’s been *really* hard
            but I actually didn’t miss them as much as I thought I would.
          </p>

          <p>Other key takeaways from the book:</p>
          <ul>
            <li>
              Have a consistent cut off time to finish work for the day (rest is
              important for deep work!)
            </li>
            <li>Deep work takes *lots* of practise</li>
            <li>
              Even the most successful people can’t do more than 4 hours of deep
              work per day.
            </li>
            <li>
              Productive meditation is important: using the time when you’re
              physically busy but mentally not (eg. walking the dog for me) to
              mull over a problem
            </li>
          </ul>
          <p>
            If you love stories and anecdotes of successful people and how they
            work, you’ll probably love this book! If you don’t, it will be more
            of a struggle but it’s definitely a good kick in the pants to take
            some action towards improving your focus.
          </p>
          <p>
            I'm quite keen to check out Cal's book on 'Digital Minimalism'
            sometime soon.
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/deep-work-cal-newport/book/9780349411903.html">
            Purchase Deep Work from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/indistractable.png"
            className={utilStyles.bookReviewImage}
            alt="The audio book Indistractable"
          />
          <h3 id="book-indistractable" className={utilStyles.bookReviewTitle}>
            Indistractable: How to Control Your Attention and Choose Your Life
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Nir Eyal, Julie Li</p>
          <p>
            My unplanned bonus book of January. If you’ve never read anything at
            all, ever, about distraction or habits or focus then this is
            probably a good place to start! But there’s nothing really new or
            groundbreaking. One chapter felt like a summarised version of Atomic
            Habits (which I’ve already read and loved!). Others chapters were
            common sense, eg. remove apps and notifications from your phone.
          </p>
          <p>
            There were some good tips in there but it wasn’t anything I hadn’t
            heard before. Also, a great question came from @hilarycallaghan who
            asked me if I thought it would apply to neurodiverse folk: I highly
            doubt it.
          </p>
          <p>⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/indistractable-nir-eyal/book/9781526610201.html">
            Purchase Indistractable from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/technically_wrong.png"
            className={utilStyles.bookReviewImage}
            alt="The book Technically Wrong"
          />
          <h3 id="book-technicallyWrong" className={utilStyles.bookReviewTitle}>
            Technically Wrong
          </h3>
          <p className={utilStyles.bookReviewAuthor}>
            by Sara Wachter-Boettcher
          </p>
          <p>
            I *loved* this book! Definitely one of my favourites that I’ve read
            lately!
          </p>
          <p>
            If you’ve read Invisible Women it does touch on a lot of similar
            concepts but this book is way shorter, way less intense, and won’t
            leave you feeling emotionally drained. It also raises broader issues
            in the tech industry. It touches on the myth of meritocracy as most
            of these types of books do, but it looks more closely at tech
            companies and examples of when things have gone wrong.
          </p>
          <p>
            There’s examples from Twitter, Facebook, Uber, Reddit, Google,
            Tumblr, etc. that prove time and time again what happens when the
            people who are designing and building products all look the same,
            all think the same. They’re famous examples so if you keep on top of
            this sort of news, many of them won’t be a surprise to you - but if
            you’re new to tech like I am it’s very interesting to read about!
          </p>
          <p>
            There’s also a great concept in the book about designing with
            “stress cases” in mind rather than “edge cases”.
          </p>
          <p>
            If you work in the tech industry and haven’t yet begun researching
            the types of impact badly designed technology can have (let alone
            the tech industry itself), I highly recommend this book as a great
            place to start.
          </p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/technically-wrong-sara-wachter-boettch/book/9780393356045.html">
            Purchase Technically Wrong from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/algorithms_of_oppression.png"
            className={utilStyles.bookReviewImage}
            alt="Audio book of Algorithms of Oppression"
          />
          <h3
            id="book-algorithmsOfOppression"
            className={utilStyles.bookReviewTitle}
          >
            Algorithms of Oppression: How Search Engines Reinforce Racism
          </h3>
          <p className={utilStyles.bookReviewAuthor}>by Safiya Umoja Noble</p>
          <p>
            This book is definitely not a fun, light and easy read. Even
            listening to the audiobook, it was difficult to focus at times. But
            many parts were so interesting! ⁣
          </p>
          <p>This book covers so many topics, including:</p>
          <ul>
            <li>search algorithms being biased</li>
            <li>the racism and sexism that is in search results</li>
            <li>
              the lack of diversity in decision making positions in big tech
              companies that create these products
            </li>
            <li>the history of discrimination in media</li>
            <li>
              the laws around bias in media and how that applies to the internet
            </li>
            <li>Google’s position having a monopoly on information</li>
            <li>and so much more!</li>
          </ul>
          <p>
            It raises large concerns around biased information being interpreted
            as accurate & objective. A huge takeaway for me was how most people
            believe the results they get from a Google search are unbiased. Many
            don’t even realise they’re being advertised to. Is it any wonder the
            world is currently so divided when people on opposing sides see the
            information they’re provided with on the internet as unbiased when
            it is anything but?
          </p>
          <p>
            It asks a huge question - if Google is not responsible for the
            results of their own algorithm, then who is?
          </p>
          <p>
            Definitely worth a read! I would have given it 5 stars had it
            included more research on the algorithms themselves - but of course,
            this is difficult since they’re kept under wraps by the big
            companies!
          </p>
          <p>⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/algorithms-of-oppression-safiya-umoja-noble/book/9781479837243.html">
            Purchase Algorithms of Oppression from Booktopia
          </a>
        </section>
        <hr className={utilStyles.hr} />
        <section className={utilStyles.bookReview}>
          <img
            src="/bookImages/invisible_women.png"
            className={utilStyles.bookReviewImage}
            alt="The book Invisible Women on a desk"
          />
          <h3 id="book-invisibleWomen" className={utilStyles.bookReviewTitle}>
            Invisible Women
          </h3>
          <p className={utilStyles.bookReviewAuthor}>
            by Caroline Criado Perez
          </p>
          <p>
            Okay, technically I reviewed this late 2020 but it's too good not to
            include here. It was a tough read but so important. Definitely not
            the sort of book you read to relax...
          </p>
          <p>
            It will make you feel anger, sadness, disappointment, and just
            complete outrage. Or at least, it should. If you’re a woman it will
            also be full of “mmmhmmm!” moments of validation.
          </p>
          <p>
            ⁣ It covers data bias in technology, urban planning, medicine, the
            myth of meritocracy, politics, disasters, even snow clearing, and
            much more. ⁣
          </p>
          <p>
            I honestly think this book should be required reading in all schools
            and I highly recommend it to anyone who hasn’t read it yet. Just be
            prepared for a hard and emotional read (especially if you are a
            woman). 😓
          </p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <a href="https://www.booktopia.com.au/invisible-women-caroline-criado-perez/book/9781784706289.html">
            Purchase Invisible Women from Booktopia
          </a>
        </section>
      </section>
    </Layout>
  );
}
