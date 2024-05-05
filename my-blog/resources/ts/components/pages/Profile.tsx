import React from "react";
import Header from "../layouts/Header";
import styled from "@emotion/styled";



 export const Profile = () => {
  return (
    <>
      <Header />
      <ProfileContainer>
        <ProfileHeading>プロフィール</ProfileHeading>
        <ProfileInfo>
          <ProfileSection>
            <ProfileTitle>年齢:</ProfileTitle>
            <p>25歳</p>
          </ProfileSection>
          <ProfileSection>
            <ProfileTitle>経歴:</ProfileTitle>
            <ProfileList>
              <ProfileListItem>仙台育英学園高等学校卒業</ProfileListItem>
              <ProfileListItem>明治学院大学部法学部 中退</ProfileListItem>
              <ProfileListItem>IT業界の経験: 1年</ProfileListItem>
            </ProfileList>
          </ProfileSection>
          <ProfileSection>
            <ProfileTitle>趣味:</ProfileTitle>
            <ProfileList>
              <ProfileListItem>ライブ</ProfileListItem>
              <ProfileListItem>散歩</ProfileListItem>
              <ProfileListItem>麻雀</ProfileListItem>
            </ProfileList>
          </ProfileSection>
          <ProfileSection>
            <ProfileTitle>好きなアーティスト:</ProfileTitle>
            <ProfileList>
              <ProfileListItem>櫻坂46</ProfileListItem>
              <ProfileListItem>RADWIMPS</ProfileListItem>
              <ProfileListItem>NEE</ProfileListItem>
              <ProfileListItem>サバシスター</ProfileListItem>
              <ProfileListItem>シンガーズ・ハイ</ProfileListItem>
              <ProfileListItem>その他諸々</ProfileListItem>
            </ProfileList>
          </ProfileSection>
        </ProfileInfo>
      </ProfileContainer>
    </>
  );
};

const ProfileContainer = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const ProfileHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const ProfileInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
  margin-bottom: 20px;
`;

const ProfileTitle = styled.p`
  font-weight: bold;
  color: #666;
`;

const ProfileList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProfileListItem = styled.li`
  margin-bottom: 5px;
`;