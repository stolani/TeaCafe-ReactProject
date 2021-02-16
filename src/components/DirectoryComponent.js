import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({product}) {
    return (
        <Card>
            <Link to={`/directory/${product.id}`}>
                <CardImg width="100%" src={product.image} alt={product.name} />
                <CardImgOverlay>
                    <CardTitle>{product.name} {product.currency} {product.price}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                <RenderDirectoryItem product={product}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Products</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Products</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;