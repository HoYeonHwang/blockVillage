package com.ssafy.edu.service.mission;

import com.ssafy.edu.model.mission.*;
import com.ssafy.edu.model.mission.MissionDifficultyResponse;
import com.ssafy.edu.model.mission.MissionFavoriteResponse;
import com.ssafy.edu.model.mission.MissionOneResponse;
import com.ssafy.edu.model.mission.MissionResponse;
import org.springframework.http.ResponseEntity;

public interface MissionService {
    public ResponseEntity<MissionResponse> findAll(MissionSearchTypeRequest missionSearchTypeRequest);
    public ResponseEntity<MissionOneResponse> findGetOne(Long missionId , String userEmail);
    public ResponseEntity<MissionResponse> findGetOneByUserId(String userEmail);
    public ResponseEntity<MissionOneResponse> signUpMission(MissionSignUpRequest missionSignUpRequest);
    public ResponseEntity<MissionOneResponse> updateMission(MissionUpdateRequest missionUpdateRequest);
    public ResponseEntity<MissionResponse> deleteMission(MissionDeleteRequest missionDeleteRequest);
    public ResponseEntity<MissionFavoriteResponse> MissionFavorite(MissionFavoriteRequest missionLikeRequest);
    public ResponseEntity<MissionDifficultyResponse> difficultyMission(MissionDifficultRequest missionDifficultRequest);
    public ResponseEntity<MissionResponse> MissionTodo(MissionTodoRequest missionTodoRequest);
}