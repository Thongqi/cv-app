export function List({section}){

      const { cvinfo, setUserInfo } = useContext(CVContext);
   

    const [number, setNumber] = useState(1);
      console.log(number);

      const [list, setList] = useState([
        <li data-id={number} onChange={(e) => handleChange(e)}></li>
      ]);

      
       function handleChange(e){
        const currentid = e.target.getAttribute('data-id');
        
        setUserInfo( cvinfo[section].map(item => {
            if(item.id === currentid){
                return{...cvinfo[section], text}
            }
        })
            
        );
    }

    
      function addList() {
        setNumber(number + 1);
        setList((existing) => [
          ...existing,
          <li data-id={number + 1}></li>,
        ]);
      }
      return (
        <>
          {list}
          <button onClick={() => addList()}>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>
          </button>
        </>
      );
}

