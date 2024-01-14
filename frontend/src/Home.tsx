
function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div >
      <img src={process.env.REACT_APP_SERVER_URL + 'images/image.jpg'} alt="image" />
        <div>
          Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
        </div>
      </div>
      <a href="/places">
        <button className="btn-primary">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
