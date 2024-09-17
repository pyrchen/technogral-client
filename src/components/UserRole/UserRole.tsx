import { UserRoleParts } from '@/components/UserRole/UserRole.styled';
import { Dot } from '@/uikit';

const UserRole = () => {
	return (
		<UserRoleParts.__Wrapper>
			<UserRoleParts.__RoleText>Роль:</UserRoleParts.__RoleText>
			<UserRoleParts.__RoleValueBlock>
				<Dot />
				<UserRoleParts.__RoleValueText>Опытный</UserRoleParts.__RoleValueText>
			</UserRoleParts.__RoleValueBlock>
		</UserRoleParts.__Wrapper>
	);
};

export default UserRole;
