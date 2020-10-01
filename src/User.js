// const UserForm = () => {
 //   return (
//        <form>
 //           <label>Enter a username:</label>
 //           <input />
  //      </form>
 //   );
//} 

class UserForm extends React.Component {
    state = {name: ''}

    render(){
        return (
        <div className="username">
            {name}
        </div>
        );
    };
}