const prepareHateoas = async (entity, data) => {
  
  let stockTotal = data.reduce((total, item) => total + item.stock, 0);

    const results = data
      .map((v) => {
        return {
          name: v.nombre,
          href: `/${entity}/${v.id}`,
        };
      })
      .slice(0, 4);
    const totalJoyas = data.length;
    const HATEOAS = {
      totalJoyas,
      stockTotal,
      results,
    };
    return HATEOAS;
  };
  
  
  export default prepareHateoas;