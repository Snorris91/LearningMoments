import "./Apps.css";
import { useEffect, useState } from "react";
import { getAllPosts } from "./services/getPosts";
import { getAllTopics } from "./services/getTopics";

export const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [expandedPosts, setExpandedPosts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [chosenTopic, setChosenTopic] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPosts().then((postArray) => {
      setAllPosts(postArray);
      console.log(postArray);
    });

    getAllTopics().then((topicsArray) => {
      setTopics(topicsArray);
      console.log(topicsArray);
    });
  }, []);

  useEffect(() => {
    if (chosenTopic > 0) {
      const postTopic = allPosts.filter(
        (post) => post.topic.id === (parseInt(chosenTopic))
      );
      setExpandedPosts(postTopic);
    } else {
      setExpandedPosts(allPosts);
    }
  }, [chosenTopic, allPosts]);

  useEffect(() => {
    const foundTerm = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setExpandedPosts(foundTerm);
  }, [searchTerm, allPosts]);

  return (
    <div>
      <div>
        <div className="heading-top">
          <div className="filter-bar">
            <select onChange={(event) => {
                      setChosenTopic(event.target.value);
                    }} type="filter">
              <option value="0">Select Topic...</option>
              {topics.map((topic) => {
                return (
                  <option
                    
                    value={topic.id}
                    key={topic.id}
                  >
                    {topic.name}
                  </option>
                );
              })}
            </select>
          </div>
          <h2 className="post-heading">Current Posts</h2>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search Here"
              className="search-field"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="posts">
          {expandedPosts.map((post) => {
            return (
              <section className="post-box" key={post.id}>
                <h3 className="post-title">{post.title}</h3>
                <br></br>
                <p className="post-topic">{post.topic.name}</p>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};
