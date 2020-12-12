import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import { BASE_URL } from "../constants/api";
import Heading from '../layout/heading';

function GameDetails() {
	const [detail, setDetail] = useState([]);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	const url = BASE_URL + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);

	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}

	return (
	<>
	<Heading title="Game Details"/>
		<Row className="details">
			<Col md={6} className="detail-image">
				<Image src={detail.background_image} />
			</Col>
			<Col className="detail-info">
				<h2>{detail.name}</h2>
				<p>
					<b>Description:</b> {detail.description}
				</p>
				<a href={detail.website}>Go to website</a>
			</Col>
		</Row>
	</>
	)};

export default GameDetails;