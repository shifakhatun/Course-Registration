
import PropTypes from 'prop-types';

const Course = ({course}) => {
  //console.log(course);
const {name, recipe_id, image_url, ingredients, instructions}=course;

console.log(ingredients)
    return (
        <div>
          
           <div className="card w-96 bg-base-100 shadow-xl">
<img src={image_url} alt={name} />
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe_id}</p>
    <p>{instructions.slice(0, 25)}</p>
   <h5>Ingredients:{ingredients.length}</h5>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Course;

Course.prototype = {
  course: PropTypes.object
}