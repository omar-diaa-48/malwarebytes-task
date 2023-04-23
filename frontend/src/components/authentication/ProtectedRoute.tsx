import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from '../../store';
import { BaseProps } from '../../utils/types';

interface ProtectedRouteProps extends BaseProps { }

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
	const location = useLocation();
	const user = useSelector((state: RootState) => state.user);

	if (!user.isAuthenticated) {
		return (
			<Navigate to="/login" state={{ from: location }} replace />
		)
	}

	return <>{children}</>

};

export default ProtectedRoute;