import './Principal.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Principal() {
  return (
    <div className="content">
      <main>
        <div>
          <Carousel>
            <Carousel.Item>
              <div className="d-block w-100">
                <h2>Odds aumentadas</h2>
                <h2>Odds aumentadas</h2>
                <h4>React-Bootstrap Carousel Component item 1</h4>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                  alt="Image One"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-block w-100">
                <h2>Odds aumentadas</h2>
                <h2>Odds aumentadas</h2>
                <h4>React-Bootstrap Carousel Component item 2</h4>
                <img
                  src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                  alt="Image Two"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
    </div>
  );
}
